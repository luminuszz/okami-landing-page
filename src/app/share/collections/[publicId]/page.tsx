import { getYear } from 'date-fns'
import { Clock } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { WorkButtonLink } from '@/components/work-button-link'
import { parseDistanceByDate, parseTagColor } from '@/lib/utils'
import { CollectionResponse } from '@/types/collection-response'

async function fetchCollectionDetails(publicId: string) {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/custom-list/share/${publicId}`,
  )

  const data = (await results.json()) as CollectionResponse

  console.log({ data })

  return data
}

export interface ShareCollectionPageProps {
  params: Promise<{
    publicId: string
  }>
}

export async function generateStaticParams() {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/custom-list/share-all`,
  )

  if (!results.ok) {
    throw new Error('Failed to fetch shared collections')
  }

  const shareCollectionsIds = (await results.json()) as string[]

  return shareCollectionsIds.map((publicId) => ({
    publicId,
  }))
}

export async function generateMetadata({
  params,
}: ShareCollectionPageProps): Promise<Metadata> {
  const { publicId } = await params

  const results = await fetchCollectionDetails(publicId)

  const { owner, title, description, thumbnailUrl } = results

  return {
    title,
    description: description ?? '',
    authors: [
      {
        name: owner.name,
      },
    ],
    openGraph: {
      title,
      type: 'website',
      description: description ?? '',
      images: [
        {
          url: thumbnailUrl ?? '',
          alt: `Coleção de ${owner.name} ${title ? `- ${title}` : ''}`,
        },
      ],
    },
  }
}

export default async function ShareCollectionPage({
  params,
}: ShareCollectionPageProps) {
  const { publicId } = await params

  const { title, description, owner, works } =
    await fetchCollectionDetails(publicId)

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-md text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="flex items-center gap-2">
              <div className="flex-col items-end hidden md:flex">
                <span className="text-foreground text-md">{owner.name}</span>
                <p className="text-sm text-muted-foreground">
                  Membro de desde {getYear(owner.createdAt)}
                </p>
              </div>

              <Avatar className="size-12">
                <AvatarImage src={owner.imageUrl ?? '/okami-logo.png'} />
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {works.map((work) => (
            <Card key={work.id}>
              <CardContent className="p-0">
                <div className="relative  md:aspect-[3/4] overflow-hidden rounded-md">
                  <Image
                    src={work.imageUrl || '/okami-logo.png'}
                    alt={work.name}
                    height={360}
                    width={280}
                    className="object-cover transition-transform hover:scale-110 w-full"
                  />
                </div>

                <div className="p-4 flex flex-col gap-2 justify-center">
                  <h3 className="font-semibold text-foreground text-sm mb-3 line-clamp-2 leading-tight text-center">
                    {work.name}
                  </h3>
                  <div className="gap-0.5 flex flex-wrap justify-center">
                    {work.tags.slice(0, 4)?.map((tag) => {
                      const color = parseTagColor(tag.color)

                      return (
                        <Badge
                          className="text-gray-100"
                          style={{ background: color[600] }}
                          variant="outline"
                          key={tag.id}
                        >
                          {tag.name}
                        </Badge>
                      )
                    })}
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground text-xs justify-center">
                    <Clock className="size-3" />
                    <span className="text-muted-foreground text-center">
                      Atualizado {parseDistanceByDate(work.updatedAt)}
                    </span>
                  </div>

                  <WorkButtonLink work={work} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="border-t border-[#1e2832] mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-500 text-sm">
            Coleção compartilhada • Visualização somente leitura
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            By{' '}
            <a href="https://go.myokami.xyz" className="font-bold underline">
              Okami
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
