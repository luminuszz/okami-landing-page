import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import colors from 'tailwindcss/colors'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const colorOverrides = {
  warmGray: 'stone',
  lightBlue: 'sky',
}

export const isDeprecatedColorKey = (
  colorKey: string,
): colorKey is keyof typeof colorOverrides =>
  Object.keys(colorOverrides).includes(colorKey)

export const parseTagColor = (colorKey: string) => {
  let currentColor: (typeof colors)[keyof typeof colors]

  if (isDeprecatedColorKey(colorKey)) {
    const parsedColorKey = colorOverrides[colorKey]

    currentColor = colors[parsedColorKey as keyof typeof colors]
  } else {
    currentColor = colors[colorKey as keyof typeof colors] ?? colors.gray
  }

  return currentColor
}

export type ColorKey = keyof typeof colors

type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

export const getTagColor = (
  color: ColorKey | string,
  colorNumber: ColorShade = 600,
) => {
  return parseTagColor(color)[colorNumber]
}

export const createDomainUrlWithPath = (path: string) => {
  return `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}${path}`
}
