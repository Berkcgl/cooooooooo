import { createFileRoute } from "@tanstack/react-router";
import { TrainingLanding } from "@/components/landing/TrainingLanding";
import { TRAINING_CONTENT } from "@/lib/trainings-content";

const CONTENT = TRAINING_CONTENT["llm-deployment"];

export const Route = createFileRoute("/llm-deployment")({
  head: () => ({
    meta: [
      { title: CONTENT.head.title },
      { name: "description", content: CONTENT.head.description },
      { property: "og:title", content: CONTENT.head.title },
      { property: "og:description", content: CONTENT.head.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <TrainingLanding content={CONTENT} />,
});
