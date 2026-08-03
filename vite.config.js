import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["all", "f495-106-219-167-92.ngrok-free.app"],
  },
});
