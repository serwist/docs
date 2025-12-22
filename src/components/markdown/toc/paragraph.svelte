<script lang="ts">
  import type { Paragraph } from "mdast";

  import Parser from "../parser.svelte";
  import type { RendererProps } from "../types";

  const { children }: RendererProps<Paragraph> = $props();
</script>

<Parser tokens={children} />
