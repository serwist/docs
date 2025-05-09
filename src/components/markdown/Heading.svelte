<script lang="ts">
  import type { Heading } from "mdast";
  import { getContext } from "svelte";

  import { clsx } from "$lib/clsx";
  import type { HeadingLevel } from "$lib/types";

  import Parser from "./Parser.svelte";
  import type { RendererProps } from "./types";

  const { depth, children }: RendererProps<Heading> = $props();

  const startingHeading = getContext<HeadingLevel>("startingHeading");

  const headingLevel = $derived(startingHeading + depth - 1);

  const headingClass = $derived.by(() => {
    // Since this is for rendering user's markdown, we don't allow
    // rendering <h1>, and as such, we don't style any heading like
    // a <h1>. It is presumed that a <h1> is already rendered in the
    // document.
    switch (depth) {
      case 1:
        return "h2";
      case 2:
        return "h3";
      case 3:
        return "h4";
      case 4:
        return "h5";
      case 5:
        return "h6";
      default:
        return "";
    }
  });
</script>

{#if headingLevel >= 1 && headingLevel <= 6}
  <svelte:element this={`h${headingLevel}`} class={clsx("mt-6 mb-4", headingClass)}>
    <Parser tokens={children} />
  </svelte:element>
{:else}
  <p class={clsx("mt-6 mb-4", headingClass)}>
    <Parser tokens={children} />
  </p>
{/if}
