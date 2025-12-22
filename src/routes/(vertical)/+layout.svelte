<script lang="ts">
  import Navbar from "$components/layouts/navbar.svelte";
  import PageList from "$components/page-list.svelte";
  import { clsx } from "$lib/clsx";

  const { children } = $props();
</script>

<Navbar />
<div class="flex flex-1 w-full flex-col md:flex-row">
  <div
    id="sidebar-wrapper"
    class={clsx(
      "z-10 hidden h-[calc(100dvh-var(--navbar))] md:block md:w-[clamp(16rem,33vw,20rem)] md:shrink-0 md:self-start print:hidden",
      "sticky top-(--navbar) transform-gpu transition-all duration-150 ease-out",
      "flex flex-col bg-white p-2 md:bg-transparent md:px-4 dark:bg-black dark:md:bg-transparent",
      "border-b border-neutral-300 md:border-b-0 dark:border-neutral-800"
    )}
  >
    <aside
      id="sidebar-menu"
      class="relative flex h-full animate-[details-show_100ms_ease-out] flex-col py-3 md:animate-none"
      aria-labelledby="sidebar-menu-toggle"
    >
      <PageList />
    </aside>
  </div>
  {@render children()}
</div>
