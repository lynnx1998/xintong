<script lang="ts">
  import { SITE } from '@/config';
</script>

<footer class="py-12 mt-24 sm:mt-32 lg:mt-48 border-t border-border">
  <div class="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-6">
    <div
      class="text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-60"
    >
      &copy; {new Date().getFullYear()}
      {SITE.author}
    </div>

    <div class="flex flex-wrap justify-center gap-6 sm:gap-8">
      {#each Object.entries(SITE.social) as [name, url] (name)}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all no-underline"
        >
          {name}
        </a>
      {/each}
    </div>
  </div>
</footer>
