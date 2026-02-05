import { encodeOpenGraph } from "$lib/encode-open-graph";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  title: "Blog",
  ogImage: encodeOpenGraph("Blog"),
});
