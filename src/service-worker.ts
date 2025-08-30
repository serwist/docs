import type { PrecacheEntry } from "serwist";
import { addEventListeners, CacheableResponsePlugin, CacheFirst, createSerwist, ExpirationPlugin, RangeRequestsPlugin, RuntimeCache } from "serwist";
import { defaultCache } from "vite-plugin-serwist/worker";

declare global {
  interface WorkerGlobalScope {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = createSerwist({
  precache: {
    entries: self.__SW_MANIFEST,
    cleanupOutdatedCaches: true,
    concurrency: 20,
    ignoreURLParametersMatching: [/^x-sveltekit-invalidated$/],
  },
  extensions: [
    new RuntimeCache([
      {
        matcher({ request }) {
          return request.destination === "video";
        },
        handler: new CacheFirst({
          cacheName: "static-video-assets",
          plugins: [
            new ExpirationPlugin({
              maxEntries: 16,
              maxAgeSeconds: 30 * 24 * 60 * 60, // ~30 days
              maxAgeFrom: "last-used",
            }),
            new CacheableResponsePlugin({
              statuses: [200],
            }),
            new RangeRequestsPlugin(),
          ],
        }),
      },
      ...defaultCache,
    ]),
  ],
  navigationPreload: false,
});

addEventListeners(serwist);
