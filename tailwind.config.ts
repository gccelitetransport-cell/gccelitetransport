import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F33",
        ocean: "#123B5D",
        gold: "#C9A14A",
        paper: "#F7F8FA",
        ink: "#17212B",
        muted: "#667085",
      },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
