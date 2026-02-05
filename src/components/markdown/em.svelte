<script lang="ts">
  import type { Emphasis } from "mdast";

  import Parser from "./parser.svelte";
  import type { RendererProps } from "./types";

  const { children }: RendererProps<Emphasis> = $props();
</script>

<em>
  <Parser tokens={children} />
</em>
