import { createContext } from 'react'
import { User } from 'firebase/auth'

interface UserContextType {
  user: User | null | undefined
  username: string | null | undefined
}

export const UserContext = createContext<UserContextType>({ user: null, username: null })