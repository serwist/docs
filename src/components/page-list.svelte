<script lang="ts">
  import { page } from "$app/state";
  import ChevronRight from "$components/icons/chevron-right.svelte";
  import LogoSerwist from "$components/icons/logo-serwist.svelte";
  import { clsx } from "$lib/clsx";
  import { MAP_PATH_TO_PACKAGE } from "$lib/constants";
  import { loadSidebarLinks } from "$lib/load-sidebar-links";
  import SidebarLink from "./sidebar-link.svelte";
  let menuDetails = $state<HTMLDetailsElement | null>(null);
  const splitPathname = $derived(page.url.pathname.split("/"));
  const activePath = $derived(splitPathname.length > 2 && splitPathname[1] === "docs" ? splitPathname[2] : undefined);
  const activePackage = $derived(activePath ? MAP_PATH_TO_PACKAGE[activePath] : undefined);
  const sidebar = $derived(loadSidebarLinks(activePath));
  $effect(() => {
    page.url.pathname;
    if (menuDetails) {
      menuDetails.open = false;
    }
  });
</script>

<details
  bind:this={menuDetails}
  class="details-anim [&[open]>summary]:bg-neutral-250 z-50 mb-3 w-full select-none [&[open]>summary]:dark:bg-neutral-800"
  style:--fly-translate="0.5rem"
>
  <summary
    class="hover:bg-neutral-250 flex h-18 w-full flex-row items-center rounded-md px-3 py-4 text-sm font-semibold transition-colors duration-100 dark:hover:bg-neutral-800"
    id="menu-button"
  >
    {#if activePackage}
      {@const ActivePackageLogo = activePackage[1]}
      <span class="mr-2 size-6">
        <ActivePackageLogo height={24} aria-hidden="true" tabindex={-1} />
      </span>
      <span class="mr-2 line-clamp-2">{activePackage[0]}</span>
    {:else}
      <span class="mr-2 size-6">
        <LogoSerwist height={24} aria-hidden="true" tabindex={-1} />
      </span>
      <span class="mr-2 line-clamp-2">Serwist</span>
    {/if}
    <ChevronRight class="details-chevron ml-auto transition-transform duration-100" width={18} height={18} />
  </summary>
  <div
    class={clsx(
      "absolute left-0 mt-2 w-full origin-top-right rounded-[0.625rem] shadow-lg transition ease-in-out",
      "border-[0.25px] border-neutral-300 bg-white dark:border-gray-700 dark:bg-black",
      "divide-y divide-neutral-300 ring-1 ring-black/5 focus:outline-none dark:divide-gray-700"
    )}
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="space-y-1 p-1" role="none">
      {#each Object.entries(MAP_PATH_TO_PACKAGE) as [path, [packageName, Icon, hideInMenu]] (path)}
        {@const isActive = path === activePath}
        <a
          href="/docs/{path}"
          class={clsx(
            "group flex w-full items-center rounded-md px-3 py-2 text-sm text-black transition-colors duration-100 dark:text-white",
            isActive ? "bg-gray-200 dark:bg-neutral-800" : "hover:bg-gray-200 hover:dark:bg-neutral-800"
          )}
          role="menuitem"
          tabindex="-1"
          id="menu-item-{path}"
        >
          <span class="mr-2 size-4">
            {#if !hideInMenu}
              <Icon height={16} aria-hidden="true" tabindex={-1} />
            {/if}
          </span>
          {packageName}
        </a>
      {/each}
    </div>
  </div>
</details>
<ul class="overflow-y-auto overscroll-contain px-2">
  {#each sidebar as sidebarGroup (sidebarGroup)}
    <li class="py-3">
      <span class="mb-2.5 block text-xl leading-5 font-medium tracking-tight">{sidebarGroup.title}</span>
      <ul>
        {#each sidebarGroup.children as sidebarLink (sidebarLink.href)}
          <SidebarLink {...sidebarLink} />
        {/each}
      </ul>
    </li>
  {/each}
</ul>
