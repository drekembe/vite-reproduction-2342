const path = require("path");
const vue = require("@vitejs/plugin-vue");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@cargox/components",
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
// https://vitejs.dev/config/
// export default defineConfig({
  // plugins: [vue()]
// })
