import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: JSON.stringify(process.env.VITE_API_URL),
          changeOrigin: true,
        },
      },
    },
  });
};
