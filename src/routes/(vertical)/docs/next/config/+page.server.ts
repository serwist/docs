import { encodeOpenGraphImage } from "$lib/og";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  title: "Configurator mode - @serwist/next",
  ogImage: encodeOpenGraphImage({
    title: "Configurator mode",
    desc: "@serwist/next",
  }),
});
