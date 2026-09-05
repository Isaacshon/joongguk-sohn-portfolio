import { getProjectDesignReference } from "@/lib/project-design-references";
import "@/project-reference-note.css";

export function ProjectReferenceNote({ slug }: { slug: string }) {
  const reference = getProjectDesignReference(slug);
  if (!reference) return null;
  return (
    <aside
      className="project-reference-note"
      aria-label="Primary design reference"
      data-reference={reference.sourceUrl}
    >
      <p>Primary design reference</p>
      <a href={reference.sourceUrl} target="_blank" rel="noreferrer">
        {reference.sourceName} — {reference.sourceTitle}
        <span aria-hidden="true"> ↗</span>
      </a>
      <p>{reference.observedPrinciple}</p>
    </aside>
  );
}
