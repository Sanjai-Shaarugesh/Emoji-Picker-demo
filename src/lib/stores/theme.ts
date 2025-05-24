// src/lib/stores/theme.ts
import { writable } from 'svelte/store';

export const theme = writable<'light' | 'dark'>('light');

theme.subscribe((mode) => {
  const root = document.documentElement;

  // Add/remove Tailwind dark class
  if (mode === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  // Persist in localStorage
  localStorage.setItem('theme', mode);
});
