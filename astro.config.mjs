import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ainworks.example',   // TODO: 실제 도메인으로 교체
  build: { inlineStylesheets: 'always' },
});
