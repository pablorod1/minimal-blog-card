/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
        'custom': '0px 30px 100px 0px rgba(17, 23, 41, 0.05)',
      },
		},
	},
	plugins: [],
}
