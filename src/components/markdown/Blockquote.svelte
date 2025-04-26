<script lang="ts">
  import type { Blockquote } from "mdast";

  import Parser from "./Parser.svelte";
  import type { RendererProps } from "./types";

  const { children }: RendererProps<Blockquote> = $props();
</script>

<blockquote class="text-comment mb-4 border-l-2 border-neutral-600 px-4 dark:border-neutral-400 [&>:first-child]:mt-0! [&>:last-child]:mb-0!">
  <Parser tokens={children} />
</blockquote>
