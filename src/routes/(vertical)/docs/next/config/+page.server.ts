import { encodeOpenGraph } from "$lib/encode-open-graph";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  title: "Configurator mode - @serwist/next",
  ogImage: encodeOpenGraph({
    title: "Configurator mode",
    desc: "@serwist/next",
  }),
});
