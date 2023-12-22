import { Dispatch, SetStateAction } from "react"
import { Note, db } from "../../../../../../../db"

type setNoteType = Dispatch<SetStateAction<Note | null>>

export const selectHendler = (changeNote: Note | null, setNote: setNoteType) => {
   setNote(changeNote)
   localStorage.setItem('note', JSON.stringify(changeNote))
}

export const deleteHendler = (changeNote: Note, setNote: setNoteType) => {
   setNote(null)
   localStorage.removeItem('note')
   db.notes.delete(changeNote.id)
}