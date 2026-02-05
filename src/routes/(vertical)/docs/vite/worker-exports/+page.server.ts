import { encodeOpenGraph } from "$lib/encode-open-graph";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  title: "Worker exports - @serwist/vite",
  ogImage: encodeOpenGraph({
    title: "Worker exports",
    desc: "@serwist/vite",
  }),
});
