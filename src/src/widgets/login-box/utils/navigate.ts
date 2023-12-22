import { startTransition } from "react"
import { NavigateFunction } from "react-router-dom"

export const navigateCallback = (navigate: NavigateFunction) => {
   startTransition(() => navigate('/', { replace: true }))
}