import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { SearchPlugin } from "vitepress-plugin-search";
var options = {
  language: "zh",
  tokenize: "full",
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
};

export default {
  plugins: [
    SearchPlugin(options),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: ".vitepress/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: ".vitepress/types/components.d.ts",
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    // cssCodeSplit: false,
    // css: {
    //   extract: false,
    // },
  //   css: {
  //     hmr: false,
  //   },
  },
  ssr: {
    noExternal: ["element-plus"],
  },
  // Ensure TS files are processed
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimizeDeps: {
    exclude: ['vitepress']
  }
};
