'use client'

import { Badge } from '@/components/ui/badge'
import { getTagColor } from '@/lib/utils'

export interface TagListProps {
  tags: {
    id: string
    name: string
    color: string
  }[]
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
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
  )
}
