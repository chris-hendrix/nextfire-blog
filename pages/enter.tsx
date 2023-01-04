import Image from 'next/image'
import { signIn, signOut } from '../lib/firebase'

export default function Enter() {
  const user = null
  const username = null

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ?
        !username ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />
      }
    </main>
  )
}

// Sign in with Google button
function SignInButton() {
  return (
    <button className="btn-google" onClick={async () => await signIn()}>
      <Image alt={'google.png'} width={25} height={30} src={'/google.png'} />
      Sign in with Google
    </button>
  )
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>
}

function UsernameForm() {
  return null
}