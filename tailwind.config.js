import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: ['dark'],
	corePlugins: {
		aspectRatio: false
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				satoshi: ['Satoshi', 'sans']
			},
			rotate: {
				45: '45deg',
				135: '135deg',
				225: '225deg',
				315: '315deg'
			},
			animation: {
				twinkle: 'twinkle 2s ease-in-out forwards',
				meteor: 'meteor 3s ease-in-out forwards'
			},
			keyframes: {
				twinkle: {
					'0%': {
						opacity: 0,
						transform: 'rotate(0deg)'
					},
					'50%': {
						opacity: 1,
						transform: 'rotate(180deg)'
					},
					'100%': {
						opacity: 0,
						transform: 'rotate(360deg)'
					}
				},
				meteor: {
					'0%': {
						opacity: 0,
						transform: 'translateY(200%)'
					},
					'50%': {
						opacity: 1
					},
					'100%': {
						opacity: 0,
						transform: 'translateY(0)'
					}
				}
			}
		}
	}
}

export default config
