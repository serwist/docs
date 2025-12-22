import { encodeOpenGraphImage } from "$lib/og";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => ({
  title: "Turbopack - @serwist/next",
  ogImage: encodeOpenGraphImage({
    title: "Turbopack",
    desc: "@serwist/next",
  }),
});
