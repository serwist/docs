import { defaultCache } from "vite-plugin-serwist/worker";
import type { PrecacheEntry } from "serwist";
import { Serwist, CacheFirst, ExpirationPlugin, CacheableResponsePlugin, RangeRequestsPlugin, RuntimeCacheController } from "serwist";

declare global {
  interface WorkerGlobalScope {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  precacheOptions: {
    cleanupOutdatedCaches: true,
    concurrency: 20,
    ignoreURLParametersMatching: [/^x-sveltekit-invalidated$/],
  },
  controllers: [
    new RuntimeCacheController([
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

serwist.addEventListeners();
