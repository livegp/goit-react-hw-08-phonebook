import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import injectHTML from 'vite-plugin-html-inject';
// import Icons from 'unplugin-icons/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import webfontDownload from 'vite-plugin-webfont-dl';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import zipPack from 'vite-plugin-zip-pack';
// import autoAlias from 'vite-plugin-auto-alias';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    stylelint({ fix: true }),
    ViteMinifyPlugin({}),
    VitePluginSvgSpritemap('./src/icons/*.svg'),
    webfontDownload(),
    zipPack(),
    // autoAlias({ mode: 'sync' }),
    imagePresets({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 }
        }
      })
    }),
    injectHTML(),
    reactClickToComponent()
    // Icons()
  ],
  base: '/goit-react-hw-07-phonebook/' // має відповідати шляху в index.jsx
});
