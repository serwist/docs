import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => ({
  sidebar: [
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
  ],
});
