/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                backgroundLight: "var(--backgroundLight)",
                foreground: "var(--foreground)",
                purple: "var(--purple)",
                dusty: "var(--dusty)",
                gold: "var(--gold)",
                teal: "var(--teal)",
                green: "var(--green)",
                red: "var(--red)",
                orange: "var(--orange)",
                blue: "var(--blue)",
                gray: "var(--gray)",
                white: "var(--white)",
            },
            transitionDuration: {
                DEFAULT: "300ms", // Default transition duration
                fast: "150ms",
                slow: "500ms",
            },
            transitionTimingFunction: {
                DEFAULT: "ease-in-out", // Default easing function
                snappy: "cubic-bezier(0.4, 0, 0.2, 1)", // Example custom curve
            },
            transitionProperty: {
                DEFAULT: "all", // Default transition property
                colors: "color, background-color, border-color",
                opacity: "opacity",
                transform: "transform",
            },
        },
    },
    plugins: [],
};
