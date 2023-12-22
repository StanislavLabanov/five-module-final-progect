import { Dispatch, SetStateAction } from "react"

interface valueTypeElement {
   name: 'title' | 'text'
   value: string
}

export interface valueContextProps {
   value: valueTypeElement[]
   setValue: Dispatch<SetStateAction<valueTypeElement[]>>
}