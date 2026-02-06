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
        // Murim color palette
        parchment: {
          DEFAULT: "hsl(var(--parchment))",
          dark: "hsl(var(--parchment-dark))",
        },
        ink: {
          black: "hsl(var(--ink-black))",
          border: "hsl(var(--ink-border))",
          shadow: "hsl(var(--ink-shadow))",
        },
        blood: {
          red: "hsl(var(--blood-red))",
        },
        aged: {
          gold: "hsl(var(--aged-gold))",
        },
        steel: {
          gray: "hsl(var(--steel-gray))",
        },
        // System UI colors
        system: {
          blue: "hsl(var(--system-blue))",
          green: "hsl(var(--system-green))",
          purple: "hsl(var(--system-purple))",
        },
        rank: {
          sss: "hsl(var(--rank-sss))",
          ss: "hsl(var(--rank-ss))",
          s: "hsl(var(--rank-s))",
          a: "hsl(var(--rank-a))",
          b: "hsl(var(--rank-b))",
        },
        // Cinematic palette - Black, Green, Red
        cinematic: {
          neonGreen: '#1DB954',
          hunterRed: '#CC2E2E',
          deepBlack: '#0A0A0A',
          mist: '#F5F5F5',
        },
        // Legacy support
        manga: {
          border: "hsl(var(--ink-black))",
          shadow: "hsl(var(--ink-shadow))",
        },
      },
      fontFamily: {
        manga: ["'Cinzel'", "serif"],
        body: ["'Crimson Text'", "sans-serif"],
        display: ["'Cinzel'", "serif"],
        serif: ["'Cinzel'", "Georgia", "serif"],
        sans: ["'Crimson Text'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ink: "4px 4px 0px hsl(var(--ink-black))",
        "ink-lg": "6px 6px 0px hsl(var(--ink-black))",
        "ink-xl": "8px 8px 0px hsl(var(--ink-black))",
        manga: "4px 4px 0px hsl(var(--ink-black))",
        "manga-lg": "6px 6px 0px hsl(var(--ink-black))",
        murim: "5px 5px 0px hsl(var(--ink-black)), 10px 10px 20px rgba(0, 0, 0, 0.3)",
        neonGlow: "0 0 20px rgba(29, 185, 84, 0.4)",
      },
      borderRadius: {
        none: "0",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "panel-enter": "panel-enter 0.6s ease-out",
        "ink-stroke": "ink-stroke 1.5s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "brush-reveal": "brush-reveal 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "panel-enter": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ink-stroke": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 10px rgba(29, 185, 84, 0.3)" },
          "50%": { opacity: "1", boxShadow: "0 0 25px rgba(29, 185, 84, 0.6)" },
        },
        "brush-reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;