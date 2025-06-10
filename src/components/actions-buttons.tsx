'use client'

import { useIsLogged } from '@/hooks/use-is-logged'

import { Button } from './ui/button'

export interface ActionsButtonsProps {
  isLoggedIn: boolean
}

export function ActionsButtons() {
  const { status, isLoggedIn } = useIsLogged()

  function handleToAppRedirect(path: string) {
    window.location.href = `${process.env.NEXT_PUBLIC_APP_URL}/${path}`
  }

  if (status === 'stale' || status === 'loading') {
    return null
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
