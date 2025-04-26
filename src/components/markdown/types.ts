export type RendererProps<T> = T extends any ? Omit<T, "type"> : never;

export type RendererFor = "content" | "toc";
