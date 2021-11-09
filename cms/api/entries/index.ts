import { client } from '@cms/api'
import { Entry, EntryCollection } from 'contentful'

export default async function getEntries<T>(
  contentType: string,
  query: any = {},
  depth: number = 10
): Promise<Array<Entry<T>>> {
  const entries: EntryCollection<T> = await client.getEntries<T>(
    Object.assign(query, {
      content_type: contentType,
      include: depth,
    })
  )

  let items = entries.items

  return items
}
