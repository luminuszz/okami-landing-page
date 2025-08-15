export interface Owner {
  name: string
  imageUrl: string
  createdAt: string
  id: string
}

export interface Tag {
  id: string
  name: string
  color: string
}

export interface Work {
  url: string
  alternativeName: string
  description: string
  imageUrl: string
  name: string
  tags: Tag[]
  category: string
}

export interface ShareWorkResponse {
  publicId: string
  owner: Owner
  work: Work
}
