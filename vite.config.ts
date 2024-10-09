import react from "@vitejs/plugin-react";
import http from "https";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      //   https: {
      //     key: fs.readFileSync("./.cert/key.pem"),
      //     cert: fs.readFileSync("./.cert/cert.pem"),
      //   },
      port: 3000,
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          agent: new http.Agent({ rejectUnauthorized: false }),
          configure: (proxy) => {
            proxy.on("error", (err) => {
              console.error(err);
            });
          },
        },
      },
    },
  };
});
