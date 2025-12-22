<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const { children, ...props }: Omit<HTMLAttributes<HTMLElement>, "class" | "contenteditable"> = $props();
</script>

<code class="text-comment font-mono break-all" {...props}>
  {#if children}
    {@render children()}
  {/if}
</code>
