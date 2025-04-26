// See https://kit.svelte.dev/docs/types#app
import type { BlogMetadata, OpenGraphImage, SidebarGroup } from "$lib/types";
import type { getHighlighter } from "shiki";
import type { Component } from "svelte";

// for information about these interfaces
declare global {
  declare module "*.svx" {
    declare const Comp: Component;
    export const metadata: Record<string, unknown>;
    export default Comp;
  }
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      title?: string;
      noDefaultTitle?: boolean;
      ogImage?: string;
      ogFooter?: string;
      sidebar?: SidebarGroup[];
    }
    // interface Platform {}
  }
}
