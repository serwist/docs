<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  import { clsx } from "$lib/clsx";

  interface NavLinkProps extends Omit<HTMLAnchorAttributes, "class"> {
    href: string;
    isActive?: boolean;
    noEndRounded?: boolean;
    wideText?: boolean;
    textCenter?: boolean;
    button?: Snippet<[]>;
  }

  const { href, isActive = false, noEndRounded = false, wideText = false, textCenter = true, children, button, ...props }: NavLinkProps = $props();
</script>

<span
  class={clsx(
    "transition-colors-opacity flex w-full cursor-pointer flex-row justify-between duration-100",
    isActive ? "bg-neutral-250 dark:bg-neutral-800" : "hover:bg-neutral-250 dark:hover:bg-neutral-800",
    noEndRounded ? "rounded-s-md" : "rounded-md"
  )}
>
  <a
    {href}
    class={clsx(
      "h-full w-full gap-2 px-3 py-2 font-medium break-words text-black dark:text-white",
      textCenter && "text-center",
      wideText ? "shrink-0 text-base tracking-widest uppercase" : "text-base md:text-sm"
    )}
    aria-current={isActive}
    {...props}
  >
    {#if children}
      {@render children()}
    {/if}
  </a>
  {#if button}
    {@render button()}
  {/if}
</span>
