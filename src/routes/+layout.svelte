<script lang="ts">
  import "$components/TwoslashHover.svelte";
  import "../app.css";

  import { mount, unmount } from "svelte";
  import { useSerwist } from "virtual:serwist.svelte";

  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import Twoslash from "$components/Twoslash.svelte";
  import { CANONICAL_URL, REROUTE } from "$lib/constants";
  import { isColorScheme } from "$lib/isColorScheme";
  import { colorScheme } from "$lib/stores/colorScheme";

  const { data, children } = $props();
  const isDark = $derived($colorScheme === "dark");
  const title = $derived(page.data.title ? `${page.data.title} - Serwist` : "Serwist");
  const ogImage = $derived(page.data.ogImage ?? data.fallbackOgImage);
  const { serwist } = useSerwist();

  $effect(() => {
    const twoslashElement = mount(Twoslash, {
      target: document.getElementById("root-container")!,
    });

    return () => unmount(twoslashElement);
  });

  $effect(() => {
    if (!dev && serwist) {
      serwist.addEventListener("installed", () => {
        console.log("Serwist installed!");
      });
      void serwist.register();
    }
  });

  $effect(() => {
    const newTheme = document.documentElement.dataset.theme;
    $colorScheme = isColorScheme(newTheme) ? newTheme : "light";
    colorScheme.subscribe((value) => {
      document.documentElement.dataset.theme = value;
      localStorage.setItem("theme", value);
    });
  });
</script>

<svelte:head>
  {#if !page.data.noDefaultTitle}
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
  {/if}
  <link rel="canonical" href={new URL(page.url.pathname in REROUTE ? REROUTE[page.url.pathname] : page.url.pathname, CANONICAL_URL).href} />
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta property="og:image" content={ogImage} />
  <meta name="theme-color" content={isDark ? "#000000" : "#FFFFFF"} />
</svelte:head>

<a class="absolute -top-full z-100 text-black underline focus:top-0 dark:text-white" href="#main-content">Skip to main content</a>
{@render children()}
