import { db } from "../../../../../db"


export const searchHendler = (debounce: string) => {
   if (debounce) {
      return db.notes.filter(el => el.text.indexOf(debounce) >= 0 || el.title.indexOf(debounce) >= 0).toArray()
   } else return db.notes.toArray()
}
