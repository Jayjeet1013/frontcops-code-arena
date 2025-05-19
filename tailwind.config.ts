
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
			colors: {
				primary: {
          DEFAULT: "#6366F1",
          foreground: "#fff",
        },
        accent: {
          DEFAULT: "#60A5FA",
          foreground: "#fff",
        },
        navy: "#181A2A",
				bg: "#F3F4F6",
			},
      boxShadow: {
        "soft": "0 2px 16px 0 rgba(99,102,241,0.10)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
