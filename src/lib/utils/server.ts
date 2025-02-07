import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content'

type Collections = CollectionEntry<CollectionKey>[]

export const prod = import.meta.env.PROD

export async function getWorkCollection(contentType: CollectionKey = 'work') {
  return await getCollection(contentType, ({ data }: CollectionEntry<typeof contentType>) => {
    return prod ? !data.draft : true
  })
}

export async function getUsesCollection(contentType: CollectionKey = 'use') {
  return await getCollection(contentType, ({ data }: CollectionEntry<typeof contentType>) => {
    return prod ? !data.draft : true
  })
}

export function sortMDByDate(collections: Collections) {
  return collections.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf()
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf()
    return bDate - aDate
  })
}
