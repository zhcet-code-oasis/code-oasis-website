import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()] //site: 'https://zhcet-code-oasis.github.io',
  //base: '/code-oasis-website',
  ,

  output: "server",
  adapter: vercel()
});