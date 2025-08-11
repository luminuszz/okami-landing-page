export interface Tag {
  id: string
  name: string
  slug: string
  color: string
}

export interface Owner {
  name: string
  createdAt: string
  imageUrl: string
}

export interface Work {
  id: string
  name: string
  url: string
  hasNewChapter: boolean
  isFinished: boolean
  imageId: string
  imageUrl: string
  updatedAt: string
  category: string
  nextChapterUpdatedAt: string
  chapter: number
  nextChapter?: number
  isDropped: boolean
  createdAt: string
  userId: string
  tags: Tag[]
  alternativeName: string
  isFavorite: boolean
  description: string
  __typename: string
}

export interface CollectionResponse {
  id: string
  title: string
  description: string
  __typename: string
  works: Work[]
  owner: Owner
  thumbnailUrl: string | null
}
