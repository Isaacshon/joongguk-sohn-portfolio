"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { brandWork, personalWork, getWorkProject } from "@/lib/work-gallery";
import { projects } from "@/lib/projects";

const entries = [
  ...[...brandWork, ...personalWork].map((item, index) => ({
    slug: item.slug,
    title: getWorkProject(item.slug).title,
    category: item.category,
    group: index < brandWork.length ? "Brand project" : "Personal project",
    href: `/poster-studies/${item.slug}`,
  })),
  ...projects.map((item) => ({
    ...item,
    group: "Client & digital",
    href: item.href ?? `/project/${item.slug}`,
  })),
];

export function WorkIndex() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = entries.filter((item) =>
    `${item.title} ${item.category} ${item.group}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) setQuery("");
      }}
    >
      <Dialog.Trigger asChild>
        <button type="button" className="work-gallery__index-trigger" aria-label="Project index">
          <span className="work-gallery__index-long">Project index</span>
          <span className="work-gallery__index-short" aria-hidden="true">
            Index
          </span>
          <span className="work-gallery__index-count" aria-hidden="true">
            {entries.length}
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="work-index__backdrop" />
        <Dialog.Content className="work-index" aria-describedby="work-index-description">
          <header className="work-index__header">
            <div>
              <Dialog.Title>Project index</Dialog.Title>
              <Dialog.Description id="work-index-description">
                Find a project by name or discipline.
              </Dialog.Description>
            </div>
            <Dialog.Close className="work-index__close">Close</Dialog.Close>
          </header>
          <label className="work-index__search">
            Find a project
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, brand, or discipline"
              autoComplete="off"
            />
          </label>
          <p className="work-index__count" role="status">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </p>
          <ol className="work-index__list">
            {filtered.map((item) => (
              <li key={item.slug}>
                {item.href.startsWith("/poster-studies/") ? (
                  <Link
                    to="/poster-studies/$slug"
                    params={{ slug: item.slug }}
                    onClick={() => setOpen(false)}
                  >
                    <strong>{item.title}</strong>
                    <span>{item.category}</span>
                    <small>{item.group}</small>
                    <span className="work-index__open" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                ) : (
                  <a href={item.href}>
                    <strong>{item.title}</strong>
                    <span>{item.category}</span>
                    <small>{item.group}</small>
                    <span className="work-index__open" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ol>
          {filtered.length === 0 && (
            <div className="work-index__empty">
              <p>No projects match “{query}”.</p>
              <button type="button" onClick={() => setQuery("")}>
                Show all projects
              </button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
