export const timeHendler = (dateNote: any | null) => {
   const today = new Date();
   const day = String(today.getDate()).padStart(2, '0');
   const month = String(today.getMonth() + 1).padStart(2, '0');
   const year = today.getFullYear();
   const hour = String(today.getHours()).padStart(2, '0')
   const minutes = String(today.getMinutes()).padStart(2, '0')

   if (!dateNote) {
      return ({ day, month, year, hour, minutes })
   } else if (dateNote.day === day) {
      return (dateNote.hour + ':' + dateNote.minutes)
   } else {
      return (dateNote.day + '.' + dateNote.month + '.' + dateNote.year)
   }
}