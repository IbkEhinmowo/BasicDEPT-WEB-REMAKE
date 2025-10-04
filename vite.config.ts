/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/BasicDEPT-WEB-REMAKE/",
  plugins: [react()],
});
