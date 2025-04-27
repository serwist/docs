import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => ({
  sidebar: [
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
  ],
});
