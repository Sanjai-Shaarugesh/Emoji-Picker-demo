<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { get } from 'svelte/store';

  let isDark = get(theme) === 'dark';

  function toggleTheme() {
    isDark = !isDark;
    theme.set(isDark ? 'dark' : 'light');
  }
</script>

<button
  on:click={toggleTheme}
  class="rounded-full p-1 transition-all duration-300 hover:scale-105 hover:shadow-md"
  aria-label="Toggle Theme"
>
  <div class="w-14 h-7 bg-yellow-400 dark:bg-gray-700 rounded-full relative transition-colors duration-300">
    <div
      class="absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center transition-transform duration-300"
      class:translate-x-7={isDark}
    >
      {#if isDark}
        🌙
      {:else}
        ☀️
      {/if}
    </div>
  </div>
</button>
