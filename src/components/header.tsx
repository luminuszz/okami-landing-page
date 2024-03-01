import { ActionsButtons } from './actions-buttons'
import { Logo } from './logo'
import { ModeToggle } from './theme-toggle'

export function Header() {
  return (
    <header>
      <div className="flex h-16 items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-2">
          <Logo className="size-12 cursor-pointer hover:opacity-90" />
          <span className="font-mono  text-2xl tracking-wider">OKAMI</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ActionsButtons />

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
