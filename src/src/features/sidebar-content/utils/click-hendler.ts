import { Note } from "../../../../../db"
import { editContextProps } from "../../../app/context/edit/type/type"
import { valueContextProps } from "../../../app/context/value/type/type"

export const clickHendler = (item: Note, value: editContextProps | undefined, valueInputs: valueContextProps | undefined) => {
   if (value && valueInputs) {
      valueInputs.setValue([{ name: 'title', value: item.title }, { name: 'text', value: item.text }])

      value.note?.id === item.id
         ? value.selectNote(null)
         : value.selectNote(item)
   }
}