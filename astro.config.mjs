// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import { dark } from '@clerk/themes'
import { esES } from '@clerk/localizations'

import tailwindcss from '@tailwindcss/vite';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    localization: esES,
    appearance: {
      baseTheme: dark,
    }}), react()],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({ mode: "standalone" }),
  output: "server",
});