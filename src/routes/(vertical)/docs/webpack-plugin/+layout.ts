import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => ({
  sidebar: [
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
  ],
});
