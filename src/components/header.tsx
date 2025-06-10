import { Flame } from 'lucide-react'

import { ActionsButtons } from './actions-buttons'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'
import { ModeToggle } from './theme-toggle'
import { Drawer, DrawerTrigger } from './ui/drawer'

export function Header() {
  return (
    <header className="px-4">
      <div className="flex flex-col items-center justify-center  py-2 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Logo className="size-12 cursor-pointer hover:opacity-90" />

          <span className="font-mono  text-2xl tracking-wider">OKAMI</span>
        </div>

        <div className=" flex flex-col items-center justify-start gap-2 md:flex-row">
          <div className="hidden  items-center gap-2 md:flex ">
            <ActionsButtons />
          </div>

          <div className="hidden  items-center gap-2 md:flex  ">
            <ModeToggle />
          </div>

          <div className="mt-20 md:invisible">
            <Drawer>
              <DrawerTrigger asChild>
                <Flame className="animate-bounce " />
              </DrawerTrigger>
              <MobileMenu />
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  )
}
