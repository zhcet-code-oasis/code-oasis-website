import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()]
  //site: 'https://zhcet-code-oasis.github.io',
  //base: '/code-oasis-website',
});
