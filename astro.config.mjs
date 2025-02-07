import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import expressiveCode from 'astro-expressive-code'
import icon from 'astro-icon'
import addClasses from 'rehype-add-classes'
import remarkUnwrapImages from 'remark-unwrap-images'

import { expressiveCodeOptions } from './src/site.config'

// https://astro.build/config
export default defineConfig({
	site: 'https://luanvothanh.com',
	integrations: [expressiveCode(expressiveCodeOptions), sitemap(), mdx(), icon(), react()],
	vite: { plugins: [tailwindcss()] },
	markdown: {
		remarkPlugins: [remarkUnwrapImages],
		rehypePlugins: [
			[
				addClasses,
				{
					h1: 'text-4xl font-bold font-satoshi',
					h2: 'text-2xl font-bold font-satoshi',
					h3: 'text-xl font-bold font-satoshi',
					h4: 'text-lg font-bold font-satoshi',
					h5: 'font-bold font-satoshi',
					h6: 'font-bold font-satoshi',
					img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
					p: 'mb-6',
					a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
					ul: 'list-disc'
				}
			]
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: ['']
			}
		}
	},
	prefetch: true,
	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true
		}
	})
})
