import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginInjectDataLocator()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [
      "localhost",
      "0.0.0.0",
      "9fa9bec1-56dd-41a4-bec0-4e618d4076e5-00-2clovamrfmfk4.worf.repl.co",
    ],
  },
});
