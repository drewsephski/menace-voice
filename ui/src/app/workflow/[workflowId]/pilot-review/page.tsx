"use client";

import { useParams } from "next/navigation";

import WorkflowLayout from "../../WorkflowLayout";
import { PilotReview } from "./PilotReview";

export default function PilotReviewPage() {
    const { workflowId } = useParams();
    return (
        <WorkflowLayout showFeaturesNav={false}>
            <PilotReview key={String(workflowId)} workflowId={Number(workflowId)} />
        </WorkflowLayout>
    );
}
