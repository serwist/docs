import type { Component } from "svelte";
import type { BlogEntry } from "./types";
import type { SVGAttributes } from "svelte/elements";
import LogoNextjs from "$components/icons/LogoNextjs.svelte";
import LogoNuxt from "$components/icons/LogoNuxt.svelte";
import LogoVite from "$components/icons/LogoVite.svelte";
import LogoWebpack from "$components/icons/LogoWebpack.svelte";
import LogoSerwist from "$components/icons/LogoSerwist.svelte";

export const COLOR_SCHEMES = ["dark", "light"] as const;

export const CANONICAL_URL = "https://serwist.pages.dev";

export const GITHUB_REPO_URL = "https://github.com/serwist/serwist";

type FrameworkSharedOptions = Record<string, string[]>;

const FRAMEWORKS_OPTIONS_MAP = {
  next: {
    build: [
      "additional-precache-entries",
      "dont-cache-bust-urls-matching",
      "injection-point",
      "manifest-transforms",
      "maximum-file-size-to-cache-in-bytes",
      "modify-url-prefix",
      "sw-dest",
      "sw-src",
    ],
    "webpack-plugin": ["chunks", "compile-src", "exclude", "exclude-chunks", "include", "webpack-compilation-plugins"],
  },
  nuxt: {
    build: [
      "additional-precache-entries",
      "dont-cache-bust-urls-matching",
      "glob-directory",
      "glob-follow",
      "glob-ignores",
      "glob-patterns",
      "glob-strict",
      "injection-point",
      "manifest-transforms",
      "maximum-file-size-to-cache-in-bytes",
      "modify-url-prefix",
      "sw-dest",
      "sw-src",
      "templated-urls",
    ],
    vite: ["base", "dev-options", "disable", "integration", "mode", "plugins", "rollup-format", "rollup-options", "scope", "sw-url", "type"],
  },
  vite: {
    build: [
      "additional-precache-entries",
      "dont-cache-bust-urls-matching",
      "glob-directory",
      "glob-follow",
      "glob-ignores",
      "glob-patterns",
      "glob-strict",
      "injection-point",
      "manifest-transforms",
      "maximum-file-size-to-cache-in-bytes",
      "modify-url-prefix",
      "sw-dest",
      "sw-src",
      "templated-urls",
    ],
  },
  "webpack-plugin": {
    build: [
      "additional-precache-entries",
      "disable-precache-manifest",
      "dont-cache-bust-urls-matching",
      "injection-point",
      "manifest-transforms",
      "maximum-file-size-to-cache-in-bytes",
      "modify-url-prefix",
      "sw-dest",
      "sw-src",
    ],
  },
} satisfies Record<string, FrameworkSharedOptions>;

export const REROUTE = Object.entries(FRAMEWORKS_OPTIONS_MAP).reduce(
  (prev, cur) => {
    for (const [parent, options] of Object.entries(cur[1])) {
      for (const option of options) {
        prev[`/docs/${cur[0]}/configuring/${option}`] = `/docs/${parent}/configuring/${option}`;
      }
    }
    return prev;
  },
  {} as Record<string, string>,
);

export const BREAKPOINTS = {
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const BLOG_ENTRIES = [
  {
    href: "/blog/2024/03/10/serwist-v9",
    title: {
      content: "Serwist 9.0.0",
      id: "serwist-v9",
    },
    description: "This major version aims to clean house after the initial forking.",
    date: "2024-03-10",
    keyPoints: [
      {
        title: "Dropped the CommonJS build",
        id: "dropped-the-commonjs-build",
      },
      {
        title: "Migrated to Zod",
        id: "migrated-to-zod",
      },
      {
        title: "Added support for concurrent precaching",
        id: "added-support-for-concurrent-precaching",
      },
      {
        title: "Removed RuntimeCaching's support for string handlers",
        id: "removed-runtimecachings-support-for-string-handlers",
      },
      {
        title: "Moved Serwist's Svelte integration into a separate package",
        id: "moved-serwists-svelte-integration-into-a-separate-package",
      },
    ],
  },
] satisfies BlogEntry[];

export const MAP_PATH_TO_PACKAGE: Record<string, [string, Component<SVGAttributes<SVGElement>>]> = {
  serwist: ["serwist", LogoSerwist],
  build: ["@serwist/build", LogoSerwist],
  cli: ["@serwist/cli", LogoSerwist],
  next: ["@serwist/next", LogoNextjs],
  nuxt: ["@serwist/nuxt", LogoNuxt],
  vite: ["vite-plugin-serwist", LogoVite],
  "webpack-plugin": ["@serwist/webpack-plugin", LogoWebpack],
  window: ["@serwist/window", LogoSerwist],
};
