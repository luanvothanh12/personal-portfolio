import {
	type SiteConfig,
	type MenuLink,
	type OpenSourceProject,
	type PlatForm,
	type Publication,
	PublishedInType
} from '@/types'
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

export const menuLinks: MenuLink[] = [
	{
		title: 'Background',
		path: '/background/'
	},
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

export const openSourceProject: OpenSourceProject[] = [
	{
		url: 'ex',
		title: 'as',
		description: 'ass',
		visibility: 'Public',
		stars: 0,
		forks: 0,
		lang: 'Typescript'
	},
	{
		url: 'ex',
		title: 'as',
		description: 'ass',
		visibility: 'Public',
		stars: 0,
		forks: 0,
		lang: 'Typescript'
	}
]

export const socialMedia = {
	github: 'https://github.com/s3822042',
	linkedin: 'https://linkedin.com/in/luanvothanh/',
	twitter: 'https://twitter.com/luanvothanh__',
	instagram: 'https://instagram.com/luanv_othanh/',
	youtube: '',
	steam: 'https://steamcommunity.com/profiles/76561198406125679/',
	reddit: 'https://reddit.com/user/MoreAd8352/',
	spotify: '',
	discord: 'https://discord.gg/YeADSh3CBV',
	facebook: 'https://fb.com/ciaraluanvothanh'
}

export const platforms: PlatForm[] = [
	{
		url: socialMedia.github,
		type: 'github',
		username: 's3822042'
	},
	{
		url: socialMedia.facebook,
		type: 'facebook',
		username: 'Luân Võ Thành'
	},
	{
		url: socialMedia.instagram,
		type: 'instagram',
		username: 'Luân Võ Thành'
	},
	{
		url: socialMedia.reddit,
		type: 'reddit',
		username: 'Luan Vo Thanh'
	},
	{
		url: socialMedia.steam,
		type: 'steam',
		username: 'paulluanvothanh'
	},
	{
		url: socialMedia.discord,
		type: 'discord',
		username: 'Algorithm Challenge'
	}
]

export const publications: Publication[] = [
	{
		paper: {
			title: 'The Importance of Polynomials in Mathematics',
			abstract:
				'This paper explores the significance of polynomials in various branches of mathematics.',
			image: 'https://via.placeholder.com/150'
		},
		authors: [{ name: 'John Doe', url: 'https://example.com/authors/john_doe' }],
		publishedIn: [
			{
				type: PublishedInType.Journal,
				url: 'https://example.com/journal',
				date: '2024-04-07',
				sourceTitle: 'Journal of Mathematics',
				sourceUrl: 'https://example.com/journal'
			}
		],
		tags: ['polynomials', 'mathematics', 'research']
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
