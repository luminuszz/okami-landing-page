import { getYear } from 'date-fns/fp/getYear'
import { Metadata } from 'next'
import Image from 'next/image'

import { ActionButtons } from '@/components/action-buttons'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { getTagColor } from '@/lib/utils'

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

export interface Results {
  publicId: string
  owner: Owner
  work: Work
}

async function fetchWorksDetails(publicWorkId: string) {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/shared-work/share/${publicWorkId}`,
  )

  if (!results.ok) {
    throw new Error('Failed to fetch work details')
  }

  return (await results.json()) as Results
}

export interface ShareWorkPageProps {
  params: {
    sharedWorkId: string
  }
}

export async function generateMetadata({
  params,
}: ShareWorkPageProps): Promise<Metadata> {
  const results = await fetchWorksDetails(params.sharedWorkId)

  const { work, owner } = results

  return {
    title: `${work?.name} ${work?.alternativeName ? `[${work?.alternativeName}]` : ''}`,
    description: work.description,
    authors: [
      {
        name: owner.name,
      },
    ],
    openGraph: {
      title: `${work?.name} ${work?.alternativeName ? `[${work?.alternativeName}]` : ''}`,
      type: 'website',
      description: work.description,
      images: [
        {
          url: work.imageUrl,
          alt: `Capa de ${work.name} [${work.alternativeName}]`,
        },
      ],
    },
  }
}

export default async function ShareWorkPage({ params }: ShareWorkPageProps) {
  const { work, owner } = await fetchWorksDetails(params.sharedWorkId)

  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-8 h-screen items-center justify-center">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-end">
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

      <div className="flex  flex-col md:flex-row gap-8 ">
        <div className="flex-shrink-0">
          <Card className="w-full md:w-64 overflow-hidden border-none bg-transparent">
            <Image
              src={work.imageUrl}
              alt={`Capa de ${work.name} [${work.alternativeName}]`}
              className="rounded-lg object-cover size-full h-[420px]"
              loading="eager"
            />
          </Card>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">{work.name}</h1>
              <p className="text-gray-400 mt-1">{work.alternativeName}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => {
                const color = getTagColor(tag.color)
                const bgColor = getTagColor(tag.color, 800)

                return (
                  <Badge
                    key={tag.id}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = bgColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = color)
                    }
                    style={{ background: color }}
                    variant="secondary"
                    className={"text-gray-100 hover:bg-['red']"}
                  >
                    {tag.name}
                  </Badge>
                )
              })}
            </div>

            <div className="mt-2">
              <h2 className="text-md mb-2 text-muted-foreground">Sinopse</h2>
              <p className="text-gray-300 leading-relaxed">
                {work.description}
              </p>
            </div>
            <ActionButtons
              work={{
                url: work.url,
                publicId: params.sharedWorkId,
                category: work.category,
              }}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#1e2832] mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-500 text-sm">
            Obra compartilhada • Visualização somente leitura
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
