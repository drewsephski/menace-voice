'use client';

import { Eye, FileText, Loader2, RefreshCw, Search, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toast } from 'sonner';

import {
  deleteDocumentApiV1KnowledgeBaseDocumentsDocumentUuidDelete,
  getDocumentApiV1KnowledgeBaseDocumentsDocumentUuidGet,
  listDocumentsApiV1KnowledgeBaseDocumentsGet,
} from '@/client/sdk.gen';
import type { DocumentResponseSchema } from '@/client/types.gen';
import { DeleteConfirmationDialog } from '@/components/DeleteConfirmationDialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganizationTimezone } from '@/hooks/useOrganizationTimezone';
import { formatDateTime } from '@/lib/dateTime';
import logger from '@/lib/logger';

interface DocumentListProps {
  refreshTrigger: number;
}

export default function DocumentList({ refreshTrigger }: DocumentListProps) {
  const organizationTimezone = useOrganizationTimezone();
  const [documents, setDocuments] = useState<DocumentResponseSchema[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<DocumentResponseSchema | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<Pick<DocumentResponseSchema, 'document_uuid' | 'filename'> | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handlePreview = async (document: DocumentResponseSchema) => {
    setSelectedDocument(document);
    setIsPreviewLoading(true);
    setPreviewError(null);

    try {
      const response = await getDocumentApiV1KnowledgeBaseDocumentsDocumentUuidGet({
        path: {
          document_uuid: document.document_uuid,
        },
      });

      if (response.error || !response.data) {
        throw new Error('Failed to load document content');
      }

      setSelectedDocument(response.data);
    } catch (err) {
      setPreviewError(err instanceof Error ? err.message : 'Failed to load document content');
      logger.error('Error loading document content:', err);
    } finally {
      setIsPreviewLoading(false);
    }
  };

  const fetchDocuments = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await listDocumentsApiV1KnowledgeBaseDocumentsGet({
        query: {
          limit: 100,
          offset: 0,
        },
      });

      if (response.error || !response.data) {
        throw new Error('Failed to fetch documents');
      }

      setDocuments(response.data.documents);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch documents');
      logger.error('Error fetching documents:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch documents on mount and when refreshTrigger changes
  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments, refreshTrigger]);

  // Poll for documents that are processing
  useEffect(() => {
    const processingDocs = documents.filter(
      (doc) => doc.processing_status === 'processing' || doc.processing_status === 'pending'
    );

    if (processingDocs.length === 0) return;

    const pollInterval = setInterval(() => {
      logger.info(`Polling for ${processingDocs.length} processing documents...`);
      fetchDocuments();
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(pollInterval);
  }, [documents, fetchDocuments]);

  const handleDelete = async (documentUuid: string, filename: string) => {
    setDeleteCandidate({ document_uuid: documentUuid, filename });
  };

  const confirmDelete = async () => {
    if (!deleteCandidate) return;

    setIsDeleting(true);

    try {
      const response = await deleteDocumentApiV1KnowledgeBaseDocumentsDocumentUuidDelete({
        path: {
          document_uuid: deleteCandidate.document_uuid,
        },
      });

      if (response.error) {
        throw new Error('Failed to delete document');
      }

      toast.success(`Deleted "${deleteCandidate.filename}"`);
      setDeleteCandidate(null);
      fetchDocuments();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete document');
      logger.error('Error deleting document:', err);
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'processing':
        return (
          <Badge variant="secondary" className="animate-pulse">
            Processing
          </Badge>
        );
      case 'pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading && documents.length === 0) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-64" />
            </div>
            <Skeleton className="h-8 w-24" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search and Refresh */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={fetchDocuments}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        </Button>
      </div>

      {/* Document List */}
      {filteredDocuments.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            {searchQuery
              ? 'No documents match your search'
              : 'No documents uploaded yet'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.document_uuid}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium truncate">{doc.filename}</span>
                    {getStatusBadge(doc.processing_status)}
                    {doc.retrieval_mode === 'full_document' ? (
                      <Badge variant="outline" className="text-xs">Full Document</Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs">Chunked</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{formatFileSize(doc.file_size_bytes)}</span>
                    {doc.processing_status === 'completed' && doc.retrieval_mode !== 'full_document' && (
                      <span>{doc.total_chunks} chunks</span>
                    )}
                    <span>{formatDateTime(doc.created_at, organizationTimezone)}</span>
                  </div>
                  {doc.processing_error && (
                    <p className="text-xs text-destructive mt-1">
                      Error: {doc.processing_error}
                    </p>
                  )}
                  {doc.docling_metadata &&
                   typeof doc.docling_metadata === 'object' &&
                   'duplicate_of' in doc.docling_metadata && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Duplicate of another document
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePreview(doc)}
                  disabled={doc.processing_status !== 'completed'}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(doc.document_uuid, doc.filename)}
                  className="text-destructive hover:text-destructive/90"
                  aria-label={`Delete ${doc.filename}`}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog
        open={selectedDocument !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedDocument(null);
            setPreviewError(null);
          }
        }}
      >
        <DialogContent className="flex max-h-[85vh] max-w-6xl flex-col gap-0 p-0 sm:max-w-6xl">
          <DialogHeader className="border-b px-6 py-5">
            <DialogTitle className="truncate pr-8">
              {selectedDocument?.filename ?? 'Document preview'}
            </DialogTitle>
            <DialogDescription>
              Extracted content from your uploaded document
            </DialogDescription>
          </DialogHeader>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            {isPreviewLoading ? (
              <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                Loading document content...
              </div>
            ) : previewError ? (
              <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                {previewError}
              </div>
            ) : selectedDocument?.content ? (
              <article className="max-w-none text-sm leading-6 text-foreground">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h1 className="mb-4 mt-1 text-2xl font-bold leading-tight">{children}</h1>,
                    h2: ({ children }) => <h2 className="mb-3 mt-6 text-xl font-semibold leading-tight">{children}</h2>,
                    h3: ({ children }) => <h3 className="mb-2 mt-5 text-lg font-semibold leading-tight">{children}</h3>,
                    p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                    ul: ({ children }) => <ul className="mb-3 list-disc space-y-0.5 pl-6">{children}</ul>,
                    ol: ({ children }) => <ol className="mb-3 list-decimal space-y-0.5 pl-6">{children}</ol>,
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline underline-offset-2"
                      >
                        {children}
                      </a>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="mb-4 border-l-2 border-primary/40 pl-4 italic text-muted-foreground">
                        {children}
                      </blockquote>
                    ),
                    pre: ({ children }) => (
                      <pre className="mb-4 overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-6">
                        {children}
                      </pre>
                    ),
                    table: ({ children }) => (
                      <div className="mb-4 overflow-x-auto rounded-lg border">
                        <table className="w-full border-collapse text-left">{children}</table>
                      </div>
                    ),
                    th: ({ children }) => <th className="border-b bg-muted px-3 py-2 font-semibold">{children}</th>,
                    td: ({ children }) => <td className="border-b px-3 py-2 align-top">{children}</td>,
                    hr: () => <hr className="my-6 border-border" />,
                  }}
                >
                  {selectedDocument.content}
                </ReactMarkdown>
              </article>
            ) : (
              <div className="py-16 text-center text-sm text-muted-foreground">
                No extracted content is available for this document yet.
              </div>
            )}
          </div>

          <DialogFooter className="border-t px-6 py-4">
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DeleteConfirmationDialog
        open={deleteCandidate !== null}
        onOpenChange={(open) => {
          if (!open && !isDeleting) {
            setDeleteCandidate(null);
          }
        }}
        title="Delete document?"
        description={
          <>
            This will permanently remove{' '}
            <span className="font-medium text-foreground">{deleteCandidate?.filename}</span>{' '}
            and its extracted content from your knowledge base.
          </>
        }
        onConfirm={confirmDelete}
        isDeleting={isDeleting}
        confirmLabel="Delete document"
      />
    </div>
  );
}
