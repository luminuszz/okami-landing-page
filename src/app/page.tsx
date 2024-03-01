import { BarChart3, BookCopy, FolderSync } from 'lucide-react'

import { Header } from '@/components/header'
import { Logo } from '@/components/logo'
import { MainButton } from '@/components/main-button'
import { TelegramIcon } from '@/components/telegram-icon'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col antialiased">
      <Header />

      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <Logo className="size-48 animate-pulse" />
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] ">
          Acompanhe e sincronize suas obras favoritas em um só lugar.
        </h1>

        <p className="max-w-[30rem] text-center text-sm text-muted-foreground md:text-lg">
          OKAMI é uma plataforma para você acompanhar e sincronizar suas obras
          favoritas. Acompanhe o seu progresso de leitura, receba notificações
          de suas obras favoritas e muito mais.
        </p>

        <MainButton />
      </section>

      <section className="grid-col-2 mb-2 mt-5 grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="flex items-center gap-5  p-10">
            <BarChart3 className="size-20 text-foreground" />

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl ">Estatísticas Detalhadas</h2>
              <p className="text-muted-foreground">
                Gráficos interativos e estatísticas detalhadas proporcionam
                insights sobre suas obras.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-5  p-10">
            <BookCopy className="size-20 text-foreground" />

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl ">Obras na Biblioteca</h2>
              <p className="text-muted-foreground">
                Visualize a coleção completa de suas obras cadastradas. Cada
                capa é uma porta de entrada para um mundo diferente.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-5  p-10">
            <FolderSync className="size-20 text-foreground" />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl ">Suas Obras Sempre Atualizadas</h2>
              <p className="text-muted-foreground">
                Ao cadastrar uma nova obra, basta fornecer a URL do fansub ou
                scan de sua preferência. Okami irá te avisar sempre que um novo
                capítulo ou episódio for lançado.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-5  p-10">
            <TelegramIcon fill="white" className="size-20 text-foreground" />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl ">Notificações no telegram</h2>
              <p className="text-muted-foreground">
                Cada vez que uma obra que você acompanha é atualizada, você
                recebe uma notificação instantânea no seu Telegram.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="my-2 mt-10 text-center text-sm">
        Okami - Todos os direitos reservados &copy; {new Date().getFullYear()}
      </footer>
    </main>
  )
}
