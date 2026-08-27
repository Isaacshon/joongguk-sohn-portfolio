import { createServerFn } from "@tanstack/react-start";

import { loadWriterLibrary } from "../writer-library.server";

export const getWriterLibrary = createServerFn({ method: "GET" }).handler(() =>
  loadWriterLibrary(),
);
