import { BLOG_ENTRIES } from "$lib/constants";
import { encodeOpenGraph } from "$lib/encode-open-graph";

export const load = ({ url }) => {
  const metadata = BLOG_ENTRIES.find((entry) => entry.href === url.pathname);
  return {
    ...(metadata && {
      title: `${metadata.title.content} - Blog`,
      ogImage: encodeOpenGraph(metadata.title.content, "Blog"),
    }),
  };
};
