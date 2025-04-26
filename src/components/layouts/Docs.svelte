<script lang="ts" module>
  import TwoslashHover from "$components/TwoslashHover.svelte";

  import { a, code, h1, h2, h3, h4, h5, h6, ul } from "../markdown/static";

  export { a, code, h1, h2, h3, h4, h5, h6, TwoslashHover, ul };
</script>

<script lang="ts">
  import type { List } from "mdast";
  import { setContext, type Snippet } from "svelte";

  import { page } from "$app/state";
  import { encodeOpenGraph } from "$lib/encodeOpenGraph";
  import { TocObserver } from "$lib/TocObserver.svelte";

  import Toc from "../Toc.svelte";

  interface LayoutProps {
    title: string;
    footer?: string;
    headings: List;
    children: Snippet;
  }

  const { title, footer, headings, children }: LayoutProps = $props();

  const resolvedFooter = $derived(footer ?? page.data.ogFooter);
  const resolvedTitle = $derived(`${title}${resolvedFooter ? ` - ${resolvedFooter}` : ""} - Serwist`);

  const tocObserver = setContext("tocObserver", new TocObserver());

  $effect(() => {
    return () => tocObserver.disconnect();
  });
</script>

<svelte:head>
  <title>{resolvedTitle}</title>
  <meta property="og:title" content={resolvedTitle} />
  <meta property="og:image" content={encodeOpenGraph(title, resolvedFooter)} />
  <meta name="twitter:title" content={resolvedTitle} />
</svelte:head>
<main id="main-content" class="flex w-full flex-col xl:flex-row xl:justify-between">
  <nav
    class="top-0 shrink-0 px-6 pt-6 md:px-12 xl:sticky xl:order-last xl:max-h-dvh xl:w-[350px] xl:px-4 print:hidden"
    aria-label="Table of contents"
  >
    <Toc {headings} />
  </nav>
  <article class="prose flex w-full max-w-6xl flex-col p-6 md:px-12 md:pb-12 xl:pt-12">
    <h1>{title}</h1>
    {@render children()}
  </article>
</main>
