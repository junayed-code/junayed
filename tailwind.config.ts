import type { Config } from "tailwindcss";
import { screens } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "24em",
      ...screens,
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      white: colors.white,
      black: colors.black,
      current: colors.current,
      transparent: colors.transparent,
      neutral: {
        "50": "#f6f7f6",
        "100": "#e2e5e2",
        "200": "#c5cac6",
        "300": "#a1a7a2",
        "400": "#7d847f",
        "500": "#5b625d",
        "600": "#4d544f",
        "700": "#404542",
        "800": "#363937",
        "900": "#2f3230",
        "950": "#191a19",
      },

      // From global.css
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        50: "hsl(var(--primary-50))",
        100: "hsl(var(--primary-100))",
        200: "hsl(var(--primary-200))",
        300: "hsl(var(--primary-300))",
        400: "hsl(var(--primary-400))",
        500: "hsl(var(--primary-500))",
        600: "hsl(var(--primary-600))",
        700: "hsl(var(--primary-700))",
        800: "hsl(var(--primary-800))",
        900: "hsl(var(--primary-900))",
        950: "hsl(var(--primary-950))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-rubik)"],
        secondary: ["var(--font-urbanist)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: ({ theme }) => ({
        "gradient-overlay": `radial-gradient(circle, transparent, ${theme(
          "colors.background",
        )} 95%), radial-gradient(circle, rgba(200,200,200,0.15), transparent 70%)`,
        "rectangle-50": `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='49.5' height='49.5' stroke='%23232323'/%3E%3C/svg%3E")`,
        "rectangle-100": `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='99.5' height='99.5' stroke='%23232323'/%3E%3C/svg%3E")`,
      }),
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
