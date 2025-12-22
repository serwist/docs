import type { SidebarGroup } from "./types";

/**
 * Determines sidebar links based on the second path
 * segment.
 * @param sidebarType 
 * @returns The sidebar links used for this segment
 */
export const loadSidebarLinks = (sidebarType: string | null | undefined): SidebarGroup[] => {
  switch (sidebarType) {
    case "serwist":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/serwist",
            },
            {
              title: "Using the Serwist API",
              href: "/docs/serwist/core",
            },
            {
              title: "Background synchronizing",
              href: "/docs/serwist/guide/background-syncing",
            },
            {
              title: "Broadcasting cache updates",
              href: "/docs/serwist/guide/broadcasting-updates",
            },
            {
              title: "Expiring outdated responses",
              href: "/docs/serwist/guide/expiring-outdated-responses",
            },
            {
              title: "Preloading navigations",
              href: "/docs/serwist/guide/navigation-preloading",
            },
            {
              title: "Precaching assets",
              href: "/docs/serwist/guide/precaching",
            },
            {
              title: "Setting cacheability criteria",
              href: "/docs/serwist/guide/setting-cacheability-criteria",
            },
            {
              title: "Runtime caching",
              href: "/docs/serwist/runtime-caching",
            },
            {
              title: "Routing",
              href: "/docs/serwist/runtime-caching/routing",
            },
            {
              title: "Using caching strategies",
              href: "/docs/serwist/runtime-caching/caching-strategies",
            },
            {
              title: "Using strategy plugins",
              href: "/docs/serwist/runtime-caching/plugins",
            },
          ],
        },
        {
          title: "Core functions",
          children: [
            {
              title: "BackgroundSyncQueue",
              href: "/docs/serwist/core/background-sync-queue",
            },
            {
              title: "BroadcastCacheUpdate",
              href: "/docs/serwist/core/broadcast-cache-update",
            },
            {
              title: "CacheExpiration",
              href: "/docs/serwist/core/cache-expiration",
            },
            {
              title: "CacheableResponse",
              href: "/docs/serwist/core/cacheable-response",
            },
            {
              title: "Constants",
              href: "/docs/serwist/core/constants",
            },
            {
              title: "copyResponse",
              href: "/docs/serwist/core/copy-response",
            },
            {
              title: "disableDevLogs",
              href: "/docs/serwist/core/disable-dev-logs",
            },
            { title: "disableNavigationPreload", href: "/docs/serwist/core/disable-navigation-preload" },
            { title: "enableNavigationPreload", href: "/docs/serwist/core/enable-navigation-preload" },
            { title: "isNavigationPreloadSupported", href: "/docs/serwist/core/is-navigation-preload-supported" },
            {
              title: "responsesAreSame",
              href: "/docs/serwist/core/responses-are-same",
            },
            {
              title: "Serwist",
              href: "/docs/serwist/core/serwist",
            },
            {
              title: "StorableRequest",
              href: "/docs/serwist/core/storable-request",
            },
          ],
        },
        {
          title: "Routing",
          children: [
            {
              title: "NavigationRoute",
              href: "/docs/serwist/runtime-caching/routing/navigation-route",
            },
            {
              title: "PrecacheRoute",
              href: "/docs/serwist/runtime-caching/routing/precache-route",
            },
            {
              title: "RegExpRoute",
              href: "/docs/serwist/runtime-caching/routing/reg-exp-route",
            },
            {
              title: "Route",
              href: "/docs/serwist/runtime-caching/routing/route",
            },
          ],
        },
        {
          title: "Caching strategies",
          children: [
            {
              title: "CacheFirst",
              href: "/docs/serwist/runtime-caching/caching-strategies/cache-first",
            },
            {
              title: "CacheOnly",
              href: "/docs/serwist/runtime-caching/caching-strategies/cache-only",
            },
            {
              title: "NetworkFirst",
              href: "/docs/serwist/runtime-caching/caching-strategies/network-first",
            },
            {
              title: "NetworkOnly",
              href: "/docs/serwist/runtime-caching/caching-strategies/network-only",
            },
            {
              title: "StaleWhileRevalidate",
              href: "/docs/serwist/runtime-caching/caching-strategies/stale-while-revalidate",
            },
            {
              title: "Strategy",
              href: "/docs/serwist/runtime-caching/caching-strategies/strategy",
            },
            {
              title: "StrategyHandler",
              href: "/docs/serwist/runtime-caching/caching-strategies/strategy-handler",
            },
          ],
        },
        {
          title: "Strategy plugins",
          children: [
            {
              title: "BackgroundSyncPlugin",
              href: "/docs/serwist/runtime-caching/plugins/background-sync-plugin",
            },
            {
              title: "BroadcastUpdatePlugin",
              href: "/docs/serwist/runtime-caching/plugins/broadcast-update-plugin",
            },
            { title: "CacheableResponsePlugin", href: "/docs/serwist/runtime-caching/plugins/cacheable-response-plugin" },
            { title: "ExpirationPlugin", href: "/docs/serwist/runtime-caching/plugins/expiration-plugin" },
            {
              title: "PrecacheFallbackPlugin",
              href: "/docs/serwist/runtime-caching/plugins/precache-fallback-plugin",
            },
          ],
        },
      ];
    case "build":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/build",
            },
          ],
        },
        {
          title: "Configuring",
          children: [
            { title: "additionalPrecacheEntries", href: "/docs/build/configuring/additional-precache-entries" },
            { title: "disablePrecacheManifest", href: "/docs/build/configuring/disable-precache-manifest" },
            { title: "dontCacheBustURLsMatching", href: "/docs/build/configuring/dont-cache-bust-urls-matching" },
            { title: "globDirectory", href: "/docs/build/configuring/glob-directory" },
            { title: "globFollow", href: "/docs/build/configuring/glob-follow" },
            { title: "globIgnores", href: "/docs/build/configuring/glob-ignores" },
            { title: "globPatterns", href: "/docs/build/configuring/glob-patterns" },
            { title: "globStrict", href: "/docs/build/configuring/glob-strict" },
            { title: "injectionPoint", href: "/docs/build/configuring/injection-point" },
            { title: "manifestTransforms", href: "/docs/build/configuring/manifest-transforms" },
            { title: "maximumFileSizeToCacheInBytes", href: "/docs/build/configuring/maximum-file-size-to-cache-in-bytes" },
            { title: "modifyURLPrefix", href: "/docs/build/configuring/modify-url-prefix" },
            { title: "swDest", href: "/docs/build/configuring/sw-dest" },
            { title: "swSrc", href: "/docs/build/configuring/sw-src" },
            { title: "templatedURLs", href: "/docs/build/configuring/templated-urls" },
          ],
        },
      ];
    case "cli":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/cli",
            },
          ],
        },
      ];
    case "next":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/next",
            },
            {
              title: "Getting started",
              href: "/docs/next/getting-started",
            },
            {
              title: "Turbopack",
              href: "/docs/next/turbo",
            },
            {
              title: "Worker exports",
              href: "/docs/next/worker-exports",
            },
          ],
        },
        {
          title: "Configuring",
          children: [
            { title: "additionalPrecacheEntries", href: "/docs/next/configuring/additional-precache-entries" },
            { title: "cacheOnNavigation", href: "/docs/next/configuring/cache-on-navigation" },
            { title: "chunks", href: "/docs/next/configuring/chunks" },
            { title: "compileSrc", href: "/docs/next/configuring/compile-src" },
            { title: "disable", href: "/docs/next/configuring/disable" },
            { title: "dontCacheBustURLsMatching", href: "/docs/next/configuring/dont-cache-bust-urls-matching" },
            { title: "exclude", href: "/docs/next/configuring/exclude" },
            { title: "excludeChunks", href: "/docs/next/configuring/exclude-chunks" },
            { title: "include", href: "/docs/next/configuring/include" },
            { title: "injectionPoint", href: "/docs/next/configuring/injection-point" },
            { title: "manifestTransforms", href: "/docs/next/configuring/manifest-transforms" },
            { title: "maximumFileSizeToCacheInBytes", href: "/docs/next/configuring/maximum-file-size-to-cache-in-bytes" },
            { title: "modifyURLPrefix", href: "/docs/next/configuring/modify-url-prefix" },
            { title: "register", href: "/docs/next/configuring/register" },
            { title: "reloadOnOnline", href: "/docs/next/configuring/reload-on-online" },
            { title: "scope", href: "/docs/next/configuring/scope" },
            { title: "swDest", href: "/docs/next/configuring/sw-dest" },
            { title: "swSrc", href: "/docs/next/configuring/sw-src" },
            { title: "swUrl", href: "/docs/next/configuring/sw-url" },
            { title: "webpackCompilationPlugins", href: "/docs/next/configuring/webpack-compilation-plugins" },
          ],
        },
      ];
    case "nuxt":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/nuxt",
            },
            {
              title: "Getting started",
              href: "/docs/nuxt/getting-started",
            },
          ],
        },
        {
          title: "Configuring",
          children: [
            { title: "additionalPrecacheEntries", href: "/docs/nuxt/configuring/additional-precache-entries" },
            { title: "base", href: "/docs/nuxt/configuring/base" },
            { title: "devOptions", href: "/docs/nuxt/configuring/dev-options" },
            { title: "disable", href: "/docs/nuxt/configuring/disable" },
            { title: "dontCacheBustURLsMatching", href: "/docs/nuxt/configuring/dont-cache-bust-urls-matching" },
            { title: "globDirectory", href: "/docs/nuxt/configuring/glob-directory" },
            { title: "globFollow", href: "/docs/nuxt/configuring/glob-follow" },
            { title: "globIgnores", href: "/docs/nuxt/configuring/glob-ignores" },
            { title: "globPatterns", href: "/docs/nuxt/configuring/glob-patterns" },
            { title: "globStrict", href: "/docs/nuxt/configuring/glob-strict" },
            { title: "injectionPoint", href: "/docs/nuxt/configuring/injection-point" },
            { title: "integration", href: "/docs/nuxt/configuring/integration" },
            { title: "manifestTransforms", href: "/docs/nuxt/configuring/manifest-transforms" },
            { title: "maximumFileSizeToCacheInBytes", href: "/docs/nuxt/configuring/maximum-file-size-to-cache-in-bytes" },
            { title: "mode", href: "/docs/nuxt/configuring/mode" },
            { title: "modifyURLPrefix", href: "/docs/nuxt/configuring/modify-url-prefix" },
            { title: "plugins", href: "/docs/nuxt/configuring/plugins" },
            { title: "rollupFormat", href: "/docs/nuxt/configuring/rollup-format" },
            { title: "rollupOptions", href: "/docs/nuxt/configuring/rollup-options" },
            { title: "scope", href: "/docs/nuxt/configuring/scope" },
            { title: "swDest", href: "/docs/nuxt/configuring/sw-dest" },
            { title: "swSrc", href: "/docs/nuxt/configuring/sw-src" },
            { title: "swUrl", href: "/docs/nuxt/configuring/sw-url" },
            { title: "templatedURLs", href: "/docs/nuxt/configuring/templated-urls" },
            { title: "type", href: "/docs/nuxt/configuring/type" },
          ],
        },
      ];
    case "vite":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/vite",
            },
            {
              title: "Getting started",
              href: "/docs/vite/getting-started",
            },
            {
              title: "Worker exports",
              href: "/docs/vite/worker-exports",
            },
          ],
        },
        {
          title: "Recipes",
          children: [
            {
              title: "SvelteKit",
              href: "/docs/vite/recipes/svelte",
            },
          ],
        },
        {
          title: "Configuring",
          children: [
            { title: "additionalPrecacheEntries", href: "/docs/vite/configuring/additional-precache-entries" },
            { title: "base", href: "/docs/vite/configuring/base" },
            { title: "devOptions", href: "/docs/vite/configuring/dev-options" },
            { title: "disable", href: "/docs/vite/configuring/disable" },
            { title: "dontCacheBustURLsMatching", href: "/docs/vite/configuring/dont-cache-bust-urls-matching" },
            { title: "globDirectory", href: "/docs/vite/configuring/glob-directory" },
            { title: "globFollow", href: "/docs/vite/configuring/glob-follow" },
            { title: "globIgnores", href: "/docs/vite/configuring/glob-ignores" },
            { title: "globPatterns", href: "/docs/vite/configuring/glob-patterns" },
            { title: "globStrict", href: "/docs/vite/configuring/glob-strict" },
            { title: "injectionPoint", href: "/docs/vite/configuring/injection-point" },
            { title: "integration", href: "/docs/vite/configuring/integration" },
            { title: "manifestTransforms", href: "/docs/vite/configuring/manifest-transforms" },
            { title: "maximumFileSizeToCacheInBytes", href: "/docs/vite/configuring/maximum-file-size-to-cache-in-bytes" },
            { title: "mode", href: "/docs/vite/configuring/mode" },
            { title: "modifyURLPrefix", href: "/docs/vite/configuring/modify-url-prefix" },
            { title: "plugins", href: "/docs/vite/configuring/plugins" },
            { title: "rollupFormat", href: "/docs/vite/configuring/rollup-format" },
            { title: "rollupOptions", href: "/docs/vite/configuring/rollup-options" },
            { title: "scope", href: "/docs/vite/configuring/scope" },
            { title: "swDest", href: "/docs/vite/configuring/sw-dest" },
            { title: "swSrc", href: "/docs/vite/configuring/sw-src" },
            { title: "swUrl", href: "/docs/vite/configuring/sw-url" },
            { title: "templatedURLs", href: "/docs/vite/configuring/templated-urls" },
            { title: "type", href: "/docs/vite/configuring/type" },
          ],
        },
      ];
    case "webpack-plugin":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/webpack-plugin",
            },
            {
              title: "Getting started",
              href: "/docs/webpack-plugin/getting-started",
            },
          ],
        },
        {
          title: "Configuring",
          children: [
            { title: "additionalPrecacheEntries", href: "/docs/webpack-plugin/configuring/additional-precache-entries" },
            { title: "chunks", href: "/docs/webpack-plugin/configuring/chunks" },
            { title: "compileSrc", href: "/docs/webpack-plugin/configuring/compile-src" },
            { title: "disablePrecacheManifest", href: "/docs/webpack-plugin/configuring/disable-precache-manifest" },
            { title: "dontCacheBustURLsMatching", href: "/docs/webpack-plugin/configuring/dont-cache-bust-urls-matching" },
            { title: "exclude", href: "/docs/webpack-plugin/configuring/exclude" },
            { title: "excludeChunks", href: "/docs/webpack-plugin/configuring/exclude-chunks" },
            { title: "include", href: "/docs/webpack-plugin/configuring/include" },
            { title: "injectionPoint", href: "/docs/webpack-plugin/configuring/injection-point" },
            { title: "manifestTransforms", href: "/docs/webpack-plugin/configuring/manifest-transforms" },
            { title: "maximumFileSizeToCacheInBytes", href: "/docs/webpack-plugin/configuring/maximum-file-size-to-cache-in-bytes" },
            { title: "modifyURLPrefix", href: "/docs/webpack-plugin/configuring/modify-url-prefix" },
            { title: "swDest", href: "/docs/webpack-plugin/configuring/sw-dest" },
            { title: "swSrc", href: "/docs/webpack-plugin/configuring/sw-src" },
            { title: "webpackCompilationPlugins", href: "/docs/webpack-plugin/configuring/webpack-compilation-plugins" },
          ],
        },
      ];
    case "window":
      return [
        {
          title: "Introduction",
          children: [
            {
              title: "Overview",
              href: "/docs/window",
            },
          ],
        },
        {
          title: "Functions",
          children: [
            { title: "messageSW", href: "/docs/window/message-sw" },
            { title: "Serwist", href: "/docs/window/serwist" },
          ],
        },
      ];
    default:
      return [
        {
          title: "Packages",
          children: [
            {
              title: "serwist",
              href: "/docs/serwist",
            },
            {
              title: "@serwist/build",
              href: "/docs/build",
            },
            {
              title: "@serwist/cli",
              href: "/docs/cli",
            },
            {
              title: "@serwist/next",
              href: "/docs/next",
            },
            {
              title: "@serwist/nuxt",
              href: "/docs/nuxt",
            },
            {
              title: "vite-plugin-serwist",
              href: "/docs/vite",
            },
            {
              title: "@serwist/webpack-plugin",
              href: "/docs/webpack-plugin",
            },
            {
              title: "@serwist/window",
              href: "/docs/window",
            },
          ],
        },
      ];
  }
};
