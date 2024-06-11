/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        main: "SequelSansHeadline",
        alt: "SharpGroteskBook20",
      },
      boxShadow: {
        default: "0 0 15px -2px rgba(0,0,0,0.1)",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
            "background-rotation": "0deg",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
            "background-rotation": "360deg",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms forwards",
        text: "text 5s ease infinite",
      },
    },
  },
  plugins: [],
};
