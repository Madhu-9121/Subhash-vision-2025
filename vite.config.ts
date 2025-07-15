import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginInjectDataLocator()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['all']
  }
});