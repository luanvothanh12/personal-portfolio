import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array
  const lowercaseItems = array.map((str) => str.toLowerCase())
  const distinctItems = new Set(lowercaseItems)
  return Array.from(distinctItems)
}

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      githubLink: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      language: z.string().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string(),
          color: z.string().optional()
        })
        .optional(),
      draft: z.boolean().default(false)
    })
})

const use = defineCollection({
  loader: glob({ base: './src/content/use', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      language: z.string().optional(),
      heroImage: z
        .object({
          src: image(),
          alt: z.string(),
          color: z.string().optional()
        })
        .optional(),
      draft: z.boolean().default(false)
    })
})

export const collections = { work, use }
