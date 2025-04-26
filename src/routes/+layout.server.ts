import { ENCODED_CANONICAL_URL } from "$lib/constants.server";
import type { LayoutServerLoad } from "./$types";

export const prerender = true;

export const load: LayoutServerLoad = () => ({
  fallbackOgImage: `/og/${ENCODED_CANONICAL_URL}/${btoa("Serwist")}.png`,
});
