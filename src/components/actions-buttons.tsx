'use client'

import { Button } from './ui/button'

export interface ActionsButtonsProps {
  isLoggedIn: boolean
}

export function ActionsButtons({ isLoggedIn }: ActionsButtonsProps) {
  function handleToAppRedirect(path: string) {
    window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}/${path}`
  }

  return isLoggedIn ? (
    <Button variant="outline" onClick={() => handleToAppRedirect('')}>
      Dashboard
    </Button>
  ) : (
    <>
      <Button
        variant="outline"
        onClick={() => handleToAppRedirect('/auth/sign-in')}
      >
        Login
      </Button>
      <Button
        variant="secondary"
        onClick={() => handleToAppRedirect('/auth/sign-up')}
      >
        Cadastre-se
      </Button>
    </>
  )
}
