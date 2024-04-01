import { defineCollection, z } from 'astro:content'

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array
	const lowercaseItems = array.map((str) => str.toLowerCase())
	const distinctItems = new Set(lowercaseItems)
	return Array.from(distinctItems)
}

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			heading: z.string(),
			subheading: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			img: z.string(),
			img_alt: z.string(),
			draft: z.boolean().default(false)
		})
	}),
	uses: defineCollection({
		type: 'content',
		schema: z.object({
			heading: z.string(),
			subheading: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			img: z.string(),
			img_alt: z.string(),
			draft: z.boolean().default(false)
		})
	})
}
