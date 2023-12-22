import { Dispatch, SetStateAction } from "react"
import { Note } from "../../../../../../../db"

export const okHendler = (callback: () => void, setActiveModal: Dispatch<SetStateAction<Note | undefined>>) => {
   callback()
   setActiveModal(undefined)
}