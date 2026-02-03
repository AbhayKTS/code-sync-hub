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
          yellow: "hsl(var(--pastel-yellow))",
        },
        manga: {
          border: "hsl(var(--manga-border))",
          shadow: "hsl(var(--manga-shadow))",
        },
        action: {
          red: "hsl(var(--action-red))",
          gold: "hsl(var(--action-gold))",
          cyan: "hsl(var(--action-cyan))",
        },
      },
      fontFamily: {
        manga: ["'Bangers'", "cursive"],
        body: ["'Nunito'", "sans-serif"],
      },
      boxShadow: {
        manga: "5px 5px 0px hsl(var(--manga-border))",
        "manga-lg": "8px 8px 0px hsl(var(--manga-border))",
        "manga-xl": "12px 12px 0px hsl(var(--manga-border))",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        float: "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
        glow: "0 0 30px rgba(255, 100, 150, 0.4)",
        "glow-blue": "0 0 30px rgba(100, 200, 255, 0.4)",
        "glow-gold": "0 0 30px rgba(255, 200, 50, 0.4)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "speed-line": "speed-line 0.5s ease-out",
        "panel-enter": "panel-enter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "panel-slam": "panel-slam 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bubble-pop": "bubble-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "ink-stroke": "ink-stroke 1.5s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shake": "shake 0.5s ease-in-out",
        "impact": "impact 0.3s ease-out",
        "spin-slow": "spin 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
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
          "0%": { opacity: "0", transform: "scale(0.8) translateY(40px) rotate(-2deg)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0) rotate(0deg)" },
        },
        "panel-slam": {
          "0%": { transform: "scale(1.3) rotate(5deg)", opacity: "0" },
          "50%": { transform: "scale(0.95) rotate(-1deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        "bubble-pop": {
          "0%": { transform: "scale(0) rotate(-10deg)" },
          "60%": { transform: "scale(1.15) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        "ink-stroke": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px) rotate(-1deg)" },
          "75%": { transform: "translateX(5px) rotate(1deg)" },
        },
        "impact": {
          "0%": { transform: "scale(1.2)", filter: "brightness(1.5)" },
          "100%": { transform: "scale(1)", filter: "brightness(1)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;