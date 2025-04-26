import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => ({
  sidebar: [
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
  ],
});
