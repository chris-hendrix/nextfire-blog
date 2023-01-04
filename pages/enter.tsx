import { useEffect, useState, useCallback, useContext } from 'react'
import debounce from 'lodash.debounce'
import Image from 'next/image'
import { doc, writeBatch, getDoc } from 'firebase/firestore'
import { firestore } from '../lib/firebase'
import { signIn, signOut } from '../lib/firebase'
import { UserContext } from '../lib/context'
import Metatags from '../components/Metatags'

export default function Enter() {
  const { user, username } = useContext(UserContext)

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      <Metatags title="Enter" description="Sign up for this amazing app!" />
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
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

// Username form
function UsernameForm() {
  const [formValue, setFormValue] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const { user, username } = useContext(UserContext)

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create refs for both documents
    const userDoc = doc(firestore, `users/${user?.uid}`)
    const usernameDoc = doc(firestore, `usernames/${formValue}`)

    // Commit both docs together as a batch write.
    const batch = writeBatch(firestore)
    batch.set(userDoc, { username: formValue, photoURL: user?.photoURL, displayName: user?.displayName })
    batch.set(usernameDoc, { uid: user?.uid })

    await batch.commit()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Force form value typed in form to match correct format
    const val = e.target.value.toLowerCase()
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val)
      setLoading(false)
      setIsValid(false)
    }

    if (re.test(val)) {
      setFormValue(val)
      setLoading(true)
      setIsValid(false)
    }
  }

  //

  useEffect(() => {
    checkUsername(formValue)
  }, [formValue])

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = doc(firestore, `usernames/${username}`)
        const { exists } = await getDoc(ref)
        console.log('Firestore read executed!')
        setIsValid(!exists)
        setLoading(false)
      }
    }, 500),
    []
  )

  if (username) return null

  return (

    <section>
      <h3>Choose Username</h3>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="myname" value={formValue} onChange={onChange} />
        <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
        <button type="submit" className="btn-green" disabled={!isValid}>
          Choose
        </button>

        <h3>Debug State</h3>
        <div>
          Username: {formValue}
          <br />
          Loading: {loading.toString()}
          <br />
          Username Valid: {isValid.toString()}
        </div>
      </form>
    </section>
  )
}

type UsernameMessageOptions = { username: string, isValid: boolean, loading: boolean }
function UsernameMessage({ username, isValid, loading }: UsernameMessageOptions) {
  if (loading) {
    return <p>Checking...</p>
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>
  } else if (username && !isValid) {
    return <p className="text-danger">That username is taken!</p>
  } else {
    return <p></p>
  }
}