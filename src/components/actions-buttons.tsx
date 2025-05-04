'use client'

import { Button } from './ui/button'

export function ActionsButtons() {
  function handleToAppRedirect(path: string) {
    window.location.href = `https://app.myokami.xyz/auth/${path}`
  }

  return (
    <>
      <Button variant="outline" onClick={() => handleToAppRedirect('sign-in')}>
        Login
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleToAppRedirect('sign-up')}
      >
        Cadastre-se
      </Button>
    </>
  )
}
