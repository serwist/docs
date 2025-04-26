import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => ({
  sidebar: [
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
    {
      title: "Recipes",
      children: [
        {
          title: "SvelteKit",
          href: "/docs/vite/recipes/svelte",
        },
      ],
    },
  ],
});
