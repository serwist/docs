import { ENCODED_CANONICAL_URL } from "$lib/constants";

export const prerender = true;

export const load = () => ({
  fallbackOgImage: `/og/${ENCODED_CANONICAL_URL}/${btoa("Serwist")}.png`,
});