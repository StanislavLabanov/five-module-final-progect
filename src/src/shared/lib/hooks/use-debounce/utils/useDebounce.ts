import { useEffect, useState } from "react"

export const useDebounce = (value: any, delay = 200) => {
   const [debounced, setDebounced] = useState(value)

   useEffect(() => {
      const handler = setTimeout(() => setDebounced(value), delay)
      return () => clearTimeout(handler)
   }, [value, delay])

   return debounced
}