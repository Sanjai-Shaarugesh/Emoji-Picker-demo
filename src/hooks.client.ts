// src/hooks.client.ts
import { theme } from './lib/stores/theme';

const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
if (saved) theme.set(saved);
