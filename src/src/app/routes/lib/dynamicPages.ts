import { lazy } from "react";

export const dinamicPageFunction = (name: string) => {
   return lazy(() => import(`../../../pages/${name}.tsx`).then(module => ({ default: module[name] })))
}