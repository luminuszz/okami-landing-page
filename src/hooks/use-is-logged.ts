import { useEffect, useState } from 'react'

export interface UseIsLoggedResults {
  isLoggedIn: boolean
  status: 'stale' | 'loading' | 'fetched'
}

type Status = UseIsLoggedResults['status']

export function useIsLogged(): UseIsLoggedResults {
  const [isLoggedIn, setIsLogged] = useState(false)
  const [status, setStatus] = useState<Status>('stale')

  async function checksUserSession(): Promise<boolean> {
    const response = await fetch(
      String(`${process.env.NEXT_PUBLIC_API_URL}/auth/v2/check-session`),
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      },
    )

    const data: { isLogged: boolean } = await response.json()

    return response.status === 200 && data.isLogged
  }

  useEffect(() => {
    if (status === 'loading' || status === 'fetched') return

    setStatus('loading')
    checksUserSession()
      .then(setIsLogged)
      .catch(() => {
        setIsLogged(false)
      })
      .finally(() => setStatus('fetched'))
  }, [status])

  return {
    isLoggedIn,
    status,
  }
}
