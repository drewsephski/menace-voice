'use client';

import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

import { createWorkflowApiV1WorkflowCreateDefinitionPost } from '@/client/sdk.gen';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { detailFromError } from '@/lib/apiError';
import { useAuth } from '@/lib/auth';
import logger from '@/lib/logger';
import { getRandomId } from '@/lib/utils';

import { WorkflowData } from '../flow/types';

export function UploadWorkflowButton() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { user, getAccessToken } = useAuth();
    const [uploading, setUploading] = useState(false);
    const uploadingRef = useRef(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = useCallback(async (file: File) => {
        if (uploadingRef.current) return;
        uploadingRef.current = true;
        setUploading(true);
        setError(null);
        try {
            const text = await file.text();
            const workflowData: WorkflowData = JSON.parse(text);

            if (!workflowData.workflow_definition?.nodes ||
                !workflowData.workflow_definition?.edges ||
                !workflowData.workflow_definition?.viewport) {
                throw new Error('Invalid workflow data structure');
            }

            if (!user) throw new Error('Sign in to upload an agent definition.');
            const accessToken = await getAccessToken();
            if (!accessToken) throw new Error('Your session has expired. Sign in and try again.');
            const response = await createWorkflowApiV1WorkflowCreateDefinitionPost({
                body: {
                    name: workflowData.name || `WF-${getRandomId()}`,
                    workflow_definition: workflowData.workflow_definition as unknown as { [key: string]: unknown },
                },
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.error) {
                throw new Error(detailFromError(response.error, 'Failed to upload workflow. Please try again.'));
            }
            const id = response.data?.id;
            if (typeof id !== 'number' || !Number.isSafeInteger(id) || id <= 0) {
                throw new Error('The server did not return a valid workflow. Please try again.');
            }
            router.push(`/workflow/${id}`);
            setIsOpen(false);
        } catch (err) {
            setError(err instanceof SyntaxError
                ? 'Please select a valid workflow JSON file.'
                : err instanceof Error ? err.message : 'Failed to upload workflow. Please try again.');
            logger.error(`Error uploading workflow: ${err}`);
        } finally {
            uploadingRef.current = false;
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    }, [router, user, getAccessToken]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        setError(null);

        const file = e.dataTransfer.files[0];
        if (file && (file.type === 'application/json' || file.name.toLowerCase().endsWith('.json'))) {
            handleFileUpload(file);
        } else {
            setError('Please upload a valid JSON file');
        }
    }, [handleFileUpload]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    }, [handleFileUpload]);

    return (
        <>
            <Button
                onClick={() => { setError(null); setIsOpen(true); }}
                variant="outline"
            >
                <Upload className="w-4 h-4 mr-2" />
                Upload Agent Definition
            </Button>

            <Dialog open={isOpen} onOpenChange={(open) => { if (!uploadingRef.current) setIsOpen(open); }}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Upload Agent Definition</DialogTitle>
                    </DialogHeader>
                    <div
                        className={`mt-4 border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-300'
                            }`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                    >
                        <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                        <p className="text-sm text-gray-600 mb-4">
                            Drag and drop your Workflow JSON File here, or Click to Select
                        </p>
                        <input
                            ref={fileInputRef}
                            aria-label="Workflow JSON file"
                            disabled={uploading}
                            type="file"
                            accept=".json"
                            onChange={handleFileInput}
                            className="hidden"
                        />
                        <Button
                            variant="outline"
                            disabled={uploading}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {uploading ? 'Uploading...' : 'Select File'}
                        </Button>
                        {error && (
                            <p role="alert" className="mt-4 text-sm text-red-600 break-words">{error}</p>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
