<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  import InlineCode from "$components/inline-code.svelte";

  const { ...props }: HTMLAttributes<HTMLElement> = $props();
</script>

<InlineCode {...props} />
