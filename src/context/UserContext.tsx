import { createContext, ReactNode, useState } from 'react'

type UserContextType = {
  unsplash: string
  pesquisa: string
  setUnsplash: (value: string) => void
  setPesquisa: (value: string) => void
}

const initialValue: UserContextType = {
  unsplash: 'relevante',
  pesquisa: '',
  setUnsplash: () => {},
  setPesquisa: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [unsplash, setUnsplash] = useState(initialValue.unsplash)
  const [pesquisa, setPesquisa] = useState(initialValue.pesquisa)

  return (
    <UserContext.Provider value={{ unsplash, setUnsplash, pesquisa, setPesquisa }}>
      {children}
    </UserContext.Provider>
  )
}