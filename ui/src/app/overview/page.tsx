"use client";

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/lib/auth';

export default function OverviewPage() {
    const { user, provider } = useAuth();
    const isLocalMode = provider !== 'stack';

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Welcome Card */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            {isLocalMode ? (
                                "Welcome to Menace Voice"
                            ) : (
                                `Welcome${user?.displayName ? `, ${user.displayName.split(' ')[0]}` : ''}!`
                            )}
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                            {isLocalMode ? (
                                <>
                                    Get started with building voice AI workflows
                                </>
                            ) : (
                                "Get started with building voice AI workflows"
                            )}
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="card-weave mb-8 border-cta/35">
                    <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                        <div className="max-w-2xl">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cta">New here?</p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Build your first agent in five focused steps</h2>
                            <p className="mt-2 text-muted-foreground">
                                Start from a template, add knowledge, shape its voice, and connect the tools it needs.
                            </p>
                        </div>
                        <Button asChild className="shrink-0">
                            <Link href="/agent-onboarding">Start guided setup</Link>
                        </Button>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create and manage your Menace Agents</CardTitle>
                            <CardDescription>
                                Build powerful AI Voice Agents with our visual editor
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild>
                                <Link href="/workflow">
                                    Open Menace Agents
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Configure Services</CardTitle>
                            <CardDescription>
                                Set up your AI services like LLM, TTS, and STT providers
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild variant="outline">
                                <Link href="/model-configurations">
                                    Configure Models
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Resources Section */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Resources</CardTitle>
                        <CardDescription>
                            Get help and learn more about Menace Voice
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4">
                            <Button asChild variant="outline">
                                <a
                                    href="https://docs.dograh.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Documentation
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
