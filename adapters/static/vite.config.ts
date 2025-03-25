import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

// Configuration pour le build statique optimisé
export default extendConfig(baseConfig, () => ({
  build: {
    ssr: true,
    rollupOptions: {
      input: ["@qwik-city-plan"],
    },
  },
  plugins: [
    staticAdapter({
      origin: "https://pgii33.github.io/tuto-maths",
    }),
  ],
}));
