import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        colors: {
            green: colors.green,
            primary: colors.green,
            gray: colors.gray,
            white: '#ffffff',
        },
        container: {
            center: true,
            padding: 'var(--layout-x-spacer)',
            screens: {
                sm: '600px',
                md: '728px',
                lg: '728px',
                xl: '1024px',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;
