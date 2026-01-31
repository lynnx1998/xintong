<script lang="ts">
  import { onMount } from 'svelte';
  import mermaid from 'mermaid';

  interface Props {
    chart: string;
  }

  let { chart }: Props = $props();
  let svgContent = $state('');
  let error = $state('');

  onMount(async () => {
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
      securityLevel: 'loose',
    });

    try {
      const { svg } = await mermaid.render('mermaid-' + Math.random().toString(36).slice(2), chart);
      svgContent = svg;
    } catch (err) {
      console.error('Mermaid rendering error:', err);
      error = String(err);
    }
  });
</script>

{#if error}
  <div class="my-6 p-4 rounded-lg bg-destructive/10 text-destructive">
    <pre class="text-xs">{error}</pre>
  </div>
{:else if !svgContent}
  <div class="flex items-center justify-center p-8">
    <div class="text-sm text-muted-foreground">Loading diagram...</div>
  </div>
{:else}
  <div class="mermaid-container my-6 flex justify-center">
    {@html svgContent}
  </div>
{/if}

<style>
  .mermaid-container :global(svg) {
    max-width: 100%;
    height: auto;
  }
</style>
