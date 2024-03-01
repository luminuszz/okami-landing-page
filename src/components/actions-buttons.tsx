'use client'

import { Button } from './ui/button'

export function ActionsButtons() {
  function handleToAppRedirect(path: string) {
    const route = `https://okami.daviribeiro.com/auth/${path}`

    window.location.href = route
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
