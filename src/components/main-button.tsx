'use client'

import { Button } from './ui/button'

export function MainButton() {
  function handleToAppRedirect() {
    const route = `https://okami.daviribeiro.com/auth/sign-up`

    window.location.href = route
  }

  return (
    <Button variant="default" onClick={handleToAppRedirect} className="mt-5">
      Começar grátis
    </Button>
  )
}
