import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => ({
  sidebar: [
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
  ],
});
