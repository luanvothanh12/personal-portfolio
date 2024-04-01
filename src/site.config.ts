import type { SiteConfig } from '@/types'
import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: 'Vo Thanh Luan',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: 'Personal Website',
	// Meta property used as the default description meta property
	description: 'The official Astro Resume Theme',
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: 'en-GB',
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: 'en_GB',
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: 'en-GB',
		options: {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		}
	}
}

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: 'Works',
		path: '/works/'
	},
	{
		title: 'Blog',
		path: 'https://blog.luanvothanh.com/'
	},
	{
		title: 'Uses',
		path: '/uses/'
	},
	{
		title: 'Tools',
		path: '/tools/'
	}
]

interface Project {
	href: string
	heading: string
	subheading: string
	imagePath: string
	altText: string
}

export const projectsList: Project[] = [
	{
		href: '',
		heading: 'Digital Rental Website - Digirent',
		subheading:
			'A MERN stack project implemented to allows users to rent digital goods for a period of time.',
		imagePath: '/src/assets/coming-soon.png',
		altText: 'Digirent Project'
	},
	{
		href: '',
		heading: '4SST LED Board - Progressive Web App',
		subheading:
			'Progressive Web Application that will let users interact with the LEDs on the number 4 located at RMIT Vietnam, Building 2, Floor 4.',
		imagePath: '/src/assets/coming-soon.png',
		altText: 'LED Board Project'
	},
	{
		href: '',
		heading: 'Personal Blog',
		subheading:
			'A blog where I share my thoughts, experiences, and knowledge about technology, programming, and life.',
		imagePath: '/src/assets/coming-soon.png',
		altText: 'Personal Blog'
	}
]

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ['dracula', 'github-light'],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`
		}
		// return default selector
		return `[data-theme="${theme.name}"]`
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: 'none'
		},
		uiLineHeight: 'inherit',
		codeFontSize: '0.875rem',
		codeLineHeight: '1.7142857rem',
		borderRadius: '4px',
		codePaddingInline: '1rem',
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
	}
}
