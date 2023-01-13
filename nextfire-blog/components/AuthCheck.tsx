import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

type Props = { children: React.ReactNode, fallback?: React.ReactNode | null }
// Component's children only shown to logged-in users
export default function AuthCheck({ children, fallback = null }: Props): JSX.Element {
  const { username } = useContext(UserContext)

  if (!username) return <>{fallback || <Link href="/enter">You must be signed in</Link>}</>

  return <>{children}</>
}