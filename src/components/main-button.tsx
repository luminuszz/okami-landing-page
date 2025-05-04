'use client'

import { Button } from './ui/button'

export function MainButton() {
  function handleToAppRedirect() {
    window.location.href = `https://app.myokami.xyz/auth/sign-up`
  }

  return (
    <Button variant="default" onClick={handleToAppRedirect} className="mt-5">
      Começar grátis
    </Button>
  )
}
