import { timeHendler } from "../../../shared/lib/utils/time";
import { db } from '../../../../../db'
import { Dispatch, SetStateAction } from "react";
import { editContextProps } from "../../../app/context/edit/type/type";

export const onFinish = async (
   value: editContextProps | undefined,
   title: string,
   text: string,
   setValue: Dispatch<SetStateAction<any>> | undefined
) => {
   const date = JSON.stringify(timeHendler(null))

   try {
      if (value && value.note?.id && setValue) {
         await db.notes.update(value.note.id, { title, text, date })
         setValue([{ name: 'title', value: '' }, { name: 'text', value: '' }])
         value.selectNote(null)
      } else {
         await db.notes.put({
            id: Math.random().toString(16).slice(2),
            title,
            text,
            date
         })
      }
   } catch (e) {
      console.log(e)
   }
}