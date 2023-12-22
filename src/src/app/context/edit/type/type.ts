import { Note } from "../../../../../../db"

export interface editContextProps {
   note: Note | null
   selectNote: (changeNote: Note | null) => void
   deleteNote: (changeNote: Note) => void
}