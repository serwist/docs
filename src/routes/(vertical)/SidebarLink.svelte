<script lang="ts">
  import { page } from "$app/state";
  import NavLink from "$components/layouts/NavLink.svelte";
  import type { SidebarLink as SidebarLinkProps } from "$lib/types";

  const { title, href }: SidebarLinkProps = $props();
  const isActive = $derived(href === page.url.pathname || href === `${page.url.pathname}/`);
</script>

<li class="flex flex-col pt-[5px]">
  <NavLink {href} textCenter={false} {isActive}>
    {title}
  </NavLink>
</li>
