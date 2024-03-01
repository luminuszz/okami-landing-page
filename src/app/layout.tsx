import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Okami | Acompanhe e sincronize suas obras favoritas em um só lugar.',
  description: 'Acompanhe e sincronize suas obras favoritas em um só lugar',
  authors: [{ name: 'Okami', url: '@okami' }],
  robots: 'follow, index',
  themeColor: '#000000',
  icons: ['/favicon.ico', '/okami-logo.png'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon.ico" />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
