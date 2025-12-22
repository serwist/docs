<script lang="ts">
  import { page } from "$app/state";
  import LogoGitHub from "$components/icons/logo-git-hub.svelte";
  import Image from "$components/image.svelte";
  import PageList from "$components/page-list.svelte";
  import logo from "$images/logo-200x50-transparent.png?enhanced";
  import { clsx } from "$lib/clsx";
  import { GITHUB_REPO_URL } from "$lib/constants";
  import { isLinkActive } from "$lib/is-link-active";

  import { NAV_LINKS } from "./navbar-constants";
  import NavLink from "./nav-link.svelte";
  import NavToggleScheme from "./nav-toggle-scheme.svelte";

  const links = $derived(
    NAV_LINKS.map(({ link, ...rest }) => ({
      link,
      ...rest,
      isActive: isLinkActive(link, page.url.pathname),
    }))
  );

  let mobileMenu = $state<HTMLDetailsElement | undefined>(undefined);
  let visible = $state(true);

  let hashChanged = false;
  const onHashChange = () => {
    hashChanged = true;
  };

  let lastScroll = 0;
  const onScroll = () => {
    const scroll = window.scrollY;
    if (!hashChanged) {
      visible = scroll === lastScroll ? visible : scroll < 50 || scroll < lastScroll;
    }
    lastScroll = scroll;
    hashChanged = false;
  };

  $effect(() => {
    page.url.pathname;
    if (mobileMenu) {
      mobileMenu.open = false;
    }
  });
</script>

<svelte:window onhashchange={onHashChange} onscroll={onScroll} />

<nav
  class={clsx(
    "transition-colors-opacity sticky bottom-0 z-50 order-last h-(--navbar) border-t border-neutral-300 bg-white transition-transform duration-200",
    "has-[#nav-mobile-menu[open]]:border-t-transparent md:top-0 md:bottom-[unset] md:order-[unset] md:border-t-0 md:border-b dark:border-neutral-800 dark:bg-black",
    visible ? "translate-y-0" : "not-focus-within:translate-y-(--navbar) md:not-focus-within:translate-y-0"
  )}
>
  <div class="mx-auto max-w-7xl px-6 py-2 lg:px-8">
    <div class="flex items-center justify-between overflow-x-clip">
      <!-- Logo link -->
      <div class="flex items-center gap-2 md:block md:items-start md:py-2">
        <a href="/" aria-label="Go to home">
          <Image src={logo} alt="Serwist" class="h-auto max-w-25 min-w-25 invert dark:invert-0" />
        </a>
      </div>
      <div class="flex flex-row-reverse items-center gap-1.25 md:flex-row">
        <!-- Mobile menu -->
        <details bind:this={mobileMenu} class="details-anim ml-3 md:hidden" style:--fly-translate="2rem" id="nav-mobile-menu">
          <summary
            class={clsx(
              "flex size-8 cursor-pointer flex-col justify-center gap-2",
              "[&>span]:bg-black [&>span]:transition-all dark:[&>span]:bg-white",
              "[&>span]:h-[0.2rem] [&>span]:w-full [&>span]:rounded-md"
            )}
            aria-label="Toggle navbar menu"
          >
            <span class="origin-center duration-300"></span>
            <span class="duration-200 ease-out"></span>
            <span class="origin-center duration-300"></span>
          </summary>
          <div
            class={clsx(
              "fixed right-0 bottom-(--navbar) space-y-1 overflow-y-auto rounded-t-[14px] bg-white p-2 md:hidden dark:bg-black",
              "h-[clamp(350px,60dvh,800px)] w-full border-t border-neutral-300 dark:border-neutral-800"
            )}
          >
            <ul class="space-y-1">
              {#each links as { label, link, isActive } (link)}
                <li>
                  <NavLink href={link} {isActive} textCenter={false} hiddenOnMobileActive>
                    {label}
                  </NavLink>
                </li>
              {/each}
            </ul>
            <PageList />
          </div>
        </details>
        <!-- Desktop menu -->
        <div class="hidden h-full grow items-center overflow-x-hidden pr-2 md:ml-6 md:flex md:pr-0">
          <div class="overflow-x-overlay hidden h-full grow flex-row-reverse items-center gap-1.25 overflow-x-auto md:flex">
            <ul class="flex max-h-full flex-row gap-[inherit]">
              {#each links as { label, link, isActive } (link)}
                <li><NavLink href={link} {isActive}>{label}</NavLink></li>
              {/each}
            </ul>
          </div>
        </div>
        <!-- GitHub link -->
        <a class="nav-button" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
          <LogoGitHub width={24} height={24} class="max-h-6 min-h-6 max-w-6 min-w-6" />
          <span class="sr-only">Our GitHub repo (opens in a new tab)</span>
        </a>
        <NavToggleScheme />
      </div>
    </div>
  </div>
</nav>
