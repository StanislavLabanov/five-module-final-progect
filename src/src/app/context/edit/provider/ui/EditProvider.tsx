import { FC, ReactNode, useState } from "react"
import { editContext } from "../../lib/edit-context"
import { deleteHendler, selectHendler } from "../utils/edit-hendlers"
import { Note } from "../../../../../../../db"

interface Props {
   children: ReactNode
}

export const EditProvider: FC<Props> = ({ children }) => {
   const locData = localStorage.getItem('note')
   const [note, setNote] = useState<null | Note>(locData ? JSON.parse(locData!) : null)

   const valueContent = {
      note,
      selectNote: (changeNote: Note | null) => selectHendler(changeNote, setNote),
      deleteNote: (changeNote: Note) => deleteHendler(changeNote, setNote)
   }

   return (
      <editContext.Provider value={valueContent}>
         {children}
      </editContext.Provider>
   )
}