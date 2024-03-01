'use client'

import { useTheme } from 'next-themes'
import React from 'react'

export interface TelegramIconsProps {
  width?: number
  height?: number
  fill?: string
  className?: string
}

export function TelegramIcon(props: TelegramIconsProps) {
  const { theme } = useTheme()

  const currentTheme = theme === 'dark' ? 'white' : 'black'

  return (
    <svg
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      {...props}
      fill={currentTheme}
    >
      <path d="M44.377 5.986c-.487.022-.961.157-1.389.328-.423.17-2.86 1.21-6.457 2.748a20314.52 20314.52 0 00-12.91 5.528c-9.272 3.972-18.383 7.88-18.383 7.88l.067-.025s-.55.184-1.108.573a3.078 3.078 0 00-.824.81 2.145 2.145 0 00-.357 1.432c.237 1.925 2.232 2.47 2.232 2.47l.008.004 8.902 3.047c.227.757 2.7 9.012 3.244 10.76.3.966.582 1.524.875 1.904.147.19.301.338.471.446.068.042.139.075.209.103h.004c.009.004.017.004.025.008l-.023-.006c.016.007.032.018.049.024.031.01.05.01.092.02 1.02.355 1.863-.306 1.863-.306l.035-.027 5.469-5.072 8.875 6.92.111.05c1.553.69 2.958.305 3.736-.328s1.084-1.449 1.084-1.449l.034-.086 6.521-33.99c.167-.76.19-1.418.033-2.012-.157-.594-.54-1.11-1.02-1.396a2.588 2.588 0 00-1.468-.358zm.053 2.034c.197-.01.344.013.39.04.047.028.067.024.112.192.044.167.068.52-.053 1.072l-.004.012-6.484 33.793c-.016.034-.15.347-.46.598-.314.256-.664.456-1.593.066l-9.705-7.568-.274-.215-.005.006-2.903-2.178 16.31-19.19A1 1 0 0038.976 13a1 1 0 00-.53.168L14.844 28.902 5.928 25.85s-.886-.493-.928-.836c-.002-.02-.013-.002.033-.07.046-.07.162-.185.307-.286.29-.202.62-.324.62-.324l.034-.012.033-.013s9.112-3.91 18.383-7.881c4.636-1.986 9.312-3.988 12.908-5.526 3.596-1.537 6.194-2.644 6.414-2.732.25-.1.5-.141.698-.15zM33.613 18.793L21.244 33.346l-.006.006a1 1 0 00-.054.072 1 1 0 00-.055.084 1 1 0 00-.131.385 1 1 0 000 .007l-1.611 7.246c-.027-.078-.046-.106-.075-.199v-.002c-.511-1.644-2.845-9.429-3.167-10.506l17.468-11.646zM22.641 35.73l2.222 1.668-3.265 3.028 1.043-4.696z" />
    </svg>
  )
}
