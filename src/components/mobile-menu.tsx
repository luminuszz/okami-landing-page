import { ActionsButtons } from './actions-buttons'
import { ModeToggle } from './theme-toggle'
import { Button } from './ui/button'
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer'

export function MobileMenu() {
  return (
    <DrawerContent dir="right">
      <DrawerHeader>
        <DrawerTitle>Menu</DrawerTitle>
      </DrawerHeader>

      <div className="flex items-center justify-center">
        <ModeToggle />
      </div>
      <DrawerFooter className="flex  gap-2">
        <ActionsButtons />
        <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  )
}
