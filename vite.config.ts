import { defineConfig, PluginOption } from "vite-plus";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/vue-custom-renderer-playground/" : "/",
    plugins: [vue()] as PluginOption[],
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js",
      },
    },
    staged: {
      "*": "vp check --fix",
    },
    fmt: {},
    lint: {
      jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
      rules: { "vite-plus/prefer-vite-plus-imports": "error" },
      options: { typeAware: true, typeCheck: true },
    },
  };
});
