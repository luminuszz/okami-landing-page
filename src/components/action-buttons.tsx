'use client'

import { BookOpen, Share2, Tv2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { createDomainUrlWithPath } from '@/lib/utils'

export interface ActionButtonsProps {
  work: {
    url: string
    publicId: string
    category: string
  }
}

export function ActionButtons({ work }: ActionButtonsProps) {
  function handleOpenUrl() {
    window.open(work.url, '_blank')
  }

  async function handleShareWork() {
    if (!work.publicId) {
      return
    }

    await navigator.clipboard.writeText(createDomainUrlWithPath(work.publicId))
  }

  const workPredicate = work.category === 'ANIME' ? 'Assistir' : 'Ler'

  return (
    <div className="flex flex-wrap gap-4 mt-4 mb-4">
      <Button
        className="bg-purple-700 hover:bg-purple-600 text-gray-200"
        onClick={handleOpenUrl}
      >
        {work.category === 'ANIME' ? (
          <Tv2 className="mr-2  size-4" />
        ) : (
          <BookOpen className="mr-2 size-4" />
        )}
        Começar a {workPredicate}
      </Button>
      <Button
        onClick={handleShareWork}
        variant="outline"
        className="border-gray-700 text-gray-300 hover:bg-gray-800"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Compartilhar
      </Button>
    </div>
  )
}
