import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pastel: {
          pink: "hsl(var(--pastel-pink))",
          blue: "hsl(var(--pastel-blue))",
          lavender: "hsl(var(--pastel-lavender))",
          mint: "hsl(var(--pastel-mint))",
          peach: "hsl(var(--pastel-peach))",
          cream: "hsl(var(--pastel-cream))",
        },
        manga: {
          border: "hsl(var(--manga-border))",
          shadow: "hsl(var(--manga-shadow))",
        },
      },
      fontFamily: {
        manga: ["'Bangers'", "cursive"],
        body: ["'Nunito'", "sans-serif"],
      },
      boxShadow: {
        manga: "4px 4px 0px hsl(var(--manga-border))",
        "manga-lg": "6px 6px 0px hsl(var(--manga-border))",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        float: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "speed-line": "speed-line 0.5s ease-out",
        "panel-enter": "panel-enter 0.6s ease-out",
        "bubble-pop": "bubble-pop 0.3s ease-out",
        "ink-stroke": "ink-stroke 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "speed-line": {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "panel-enter": {
          "0%": { opacity: "0", transform: "scale(0.9) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "bubble-pop": {
          "0%": { transform: "scale(0)" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "ink-stroke": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
