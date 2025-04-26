import { encodeOpenGraph } from "$lib/encodeOpenGraph";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  title: "Home",
  ogImage: encodeOpenGraph("Home"),
});
