<script lang="ts">
  import type { List } from "mdast";
  import { setContext } from "svelte";

  import type { RendererFor } from "./markdown";
  import Parser from "./markdown/parser.svelte";

  const { headings }: { headings: List } = $props();

  setContext<RendererFor>("rendererFor", "toc");
</script>

<Parser tokens={headings} />
