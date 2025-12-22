import { encodeOpenGraph } from "$lib/encode-open-graph";

export const load = () => ({
  title: "Blog",
  ogImage: encodeOpenGraph("Blog"),
});
