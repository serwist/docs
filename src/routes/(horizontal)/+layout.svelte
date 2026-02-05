<script>
  import Navbar from "$components/layouts/navbar.svelte";

  const { children } = $props();
</script>

<Navbar />
<main id="main-content">
  {@render children()}
</main>
