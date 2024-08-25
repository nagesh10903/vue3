import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig(({command,mode})=>{
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base:mode === 'production' ? '/iot' : '/',
   // publicDir:'public',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/imgs':'src/assets/images',
    }
  },
  server: {
    port: 8080,
  },
  build: {
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        // to sanitize generaterd filenames
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : '';
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
        }
      }
    }
  }
};
});
