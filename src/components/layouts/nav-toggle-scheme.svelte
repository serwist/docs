<script lang="ts">
  import MoonStars from "$components/icons/moon-stars.svelte";
  import Sun from "$components/icons/sun.svelte";
  import { toggleColorScheme } from "$lib/stores/color-scheme";
</script>

<button class="nav-button" onclick={() => toggleColorScheme()}>
  <span class="visible-dark">
    <MoonStars width={24} height={24} />
  </span>
  <span class="visible-light">
    <Sun width={24} height={24} />
  </span>
  <span class="sr-only">Toggle color scheme</span>
</button>
