import { encodeOpenGraph } from "$lib/encode-open-graph";

export const load = () => ({
  title: "Home",
  ogImage: encodeOpenGraph("Home"),
});
