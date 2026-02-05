import { BLOG_ENTRIES } from "$lib/constants";
import { encodeOpenGraph } from "$lib/encode-open-graph";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ url }) => {
  const metadata = BLOG_ENTRIES.find((entry) => entry.href === url.pathname);
  return {
    ...(metadata && {
      title: `${metadata.title.content} - Blog`,
      ogImage: encodeOpenGraph(metadata.title.content, "Blog"),
    }),
  };
};
