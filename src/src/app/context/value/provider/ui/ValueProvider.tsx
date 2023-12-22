import { FC, ReactNode, useState } from "react"
import { initialState } from "../const/initial-state"
import { valueContext } from '../../lib/value-context'

interface Props {
   children: ReactNode
}

export const ValueProvider: FC<Props> = ({ children }) => {
   const locData = localStorage.getItem('value')
   const [value, setValue] = useState(locData ? JSON.parse(locData!) : initialState)

   const valueContent = { value, setValue }

   return (
      <valueContext.Provider value={valueContent}>
         {children}
      </valueContext.Provider>
   )
}