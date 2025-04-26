<script lang="ts">
  import { page } from "$app/state";
  import ChevronRight from "$components/icons/ChevronRight.svelte";
  import VerticalNavbar from "$components/layouts/VerticalNavbar.svelte";
  import { clsx } from "$lib/clsx";
  import { BREAKPOINTS } from "$lib/constants";

  import SidebarLink from "./SidebarLink.svelte";

  const { children } = $props();

  let menuCheckbox = $state<HTMLInputElement | null>(null);

  $effect(() => {
    page.url.pathname;
    const isMenuOpen = window.innerWidth >= BREAKPOINTS.md;
    if (menuCheckbox) {
      menuCheckbox.checked = isMenuOpen;
      menuCheckbox.ariaExpanded = isMenuOpen ? "true" : "false";
      menuCheckbox.ariaPressed = isMenuOpen ? "true" : "false";
    }
  });
</script>

<div class="flex h-full w-full flex-col md:flex-row">
  <div
    id="sidebar-wrapper"
    class={clsx(
      "z-10 max-h-dvh w-full md:w-64 md:shrink-0 md:self-start xl:w-80 print:hidden",
      "sticky top-0 transform-gpu transition-all duration-150 ease-out",
      "flex flex-col bg-white p-2 md:bg-transparent md:px-4 dark:bg-black dark:md:bg-transparent",
      "border-b border-neutral-300 md:border-b-0 dark:border-neutral-800"
    )}
  >
    <VerticalNavbar />
    {#if page.data.sidebar}
      <input
        type="checkbox"
        role="button"
        id="sidebar-menu-toggle"
        class="peer sr-only"
        aria-labelledby="sidebar-menu-toglab"
        aria-controls="sidebar-menu"
        bind:this={menuCheckbox}
      />
      <label
        id="sidebar-menu-toglab"
        for="sidebar-menu-toggle"
        class={clsx(
          "z-20 flex h-fit w-full cursor-pointer flex-row items-center justify-start gap-2 px-3 py-2 text-base font-medium select-none",
          "text-black duration-100 md:mt-[5px] md:text-sm dark:text-white [&>svg]:peer-checked:rotate-90",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-gray-800"
        )}
        aria-label="Toggle menu"
      >
        Menu
        <ChevronRight class="transition-transform duration-100" width={18} height={18} />
      </label>
      <aside
        id="sidebar-menu"
        class="hidden animate-[details-show_100ms_ease-out] overflow-y-auto overscroll-contain peer-checked:block md:animate-none"
        aria-labelledby="sidebar-menu-toggle"
      >
        <ul>
          {#each page.data.sidebar as sidebarGroup (sidebarGroup)}
            <li class="py-3">
              <span class="block text-xl leading-5 font-medium tracking-tight mb-[10px]">{sidebarGroup.title}</span>
              <ul>
                {#each sidebarGroup.children as sidebarLink (sidebarLink.href)}
                  <SidebarLink {...sidebarLink} />
                {/each}
              </ul>
            </li>
          {/each}
        </ul>
      </aside>
    {/if}
  </div>
  {@render children()}
</div>
