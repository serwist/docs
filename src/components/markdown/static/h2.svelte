<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  import Heading from "../toc/heading.svelte";

  const { ...props }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<Heading depth={2} {...props} />
