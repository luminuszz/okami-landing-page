import { CollectionResponse } from '@/types/collection-response'
import { ShareWorkResponse } from '@/types/shared-work-response'

export async function fetchCollectionsIdsServerSide(): Promise<string[]> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/integration/share/collections`,
    {
      headers: {
        accesstoken: process.env.API_ACCESS_TOKEN!,
      },
    },
  )
    .then(async (res) => (await res.json()) as string[])
    .catch((err) => {
      console.error(err)

      return []
    })
}

export async function fetchCollectionDetailsByPublicId(publicId: string) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/integration/share/collections/${publicId}`,
    {
      headers: {
        accesstoken: process.env.API_ACCESS_TOKEN!,
      },
    },
  ).then(async (res) => (await res.json()) as CollectionResponse)
}

export async function fetchSharedWorksIds(): Promise<string[]> {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/integration/share/works`,
    {
      headers: {
        accesstoken: process.env.API_ACCESS_TOKEN!,
      },
    },
  )
    .then(async (res) => (await res.json()) as string[])
    .catch((err) => {
      console.error(err)
      return []
    })
}

export async function fetchSharedWorkById(sharedWorkId: string) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/integration/share/works/${sharedWorkId}`,
    {
      headers: {
        accesstoken: process.env.API_ACCESS_TOKEN!,
      },
    },
  ).then(async (res) => {
    if (!res.ok) {
      console.log(res.status)
      throw new Error(`Failed to fetch shared work with ID: ${sharedWorkId}`)
    }

    return (await res.json()) as ShareWorkResponse
  })
}
