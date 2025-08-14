'use client'

import { Button } from '@/components/ui/button'

export interface WorkButtonLinkProps {
  work: {
    id: string
    url: string
    category: string
  }
}

export function WorkButtonLink({ work }: WorkButtonLinkProps) {
  function handleOpenUrl(workUrl: string) {
    window.open(workUrl, '_blank')
  }

  return (
    <Button
      variant="link"
      className="mt-2"
      onClick={() => handleOpenUrl(work.url)}
    >
      <a className="text-blue-500 hover:underline">Ver Obra</a>
    </Button>
  )
}
