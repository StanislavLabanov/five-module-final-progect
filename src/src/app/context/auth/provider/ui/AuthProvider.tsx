import { FC, ReactNode, useState } from "react"
import { singIn, singOut } from "../utils/sing-hendlers"
import { callbackType } from "../../type/type"
import { authContext } from "../../lib/auth-context"

interface Props {
   children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
   const [user, setUser] = useState<null | string>(() => localStorage.getItem('user') || null)

   const valueContent = {
      user,
      singIn: (newUser: string, callback: callbackType) => singIn(newUser, callback, setUser),
      singOut: (callback: callbackType) => singOut(callback, setUser)
   }

   return (
      <authContext.Provider value={valueContent}>
         {children}
      </authContext.Provider>
   )
}