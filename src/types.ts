export type SiteConfig = {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	date: {
		locale: string | string[] | undefined
		options: Intl.DateTimeFormatOptions
	}
}

export type PaginationLink = {
	url: string
	text?: string
	srLabel?: string
}

export type SiteMeta = {
	title: string
	description?: string
	ogImage?: string | undefined
	articleDate?: string | undefined
}

export type MenuLink = {
	title: string
	path: string
}

export type OpenSourceProject = {
	url: string
	title: string
	description: string
	visibility: string
	stars: number
	forks: number
	lang: string
}

export type PlatForm = {
	url: string
	type: string
	username: string
}

export type Author = {
	name: string
	url: string
}

export enum PublishedInType {
	Journal = 'Journal',
	Conference = 'Conference',
	Workshop = 'Workshop',
	Preprint = 'arXiv',
	Thesis = 'Thesis'
}

export type PublishedIn = {
	type: PublishedInType
	url: string
	date: string
	sourceTitle: string
	sourceUrl: string
}

export type Paper = {
	title: string
	image: string
	abstract: string
}

export type Publication = {
	authors: Author[]
	publishedIn: PublishedIn[]
	paper: Paper
	tags: string[]
}
