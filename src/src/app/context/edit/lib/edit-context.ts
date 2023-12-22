import { createContext } from "react";
import { editContextProps } from "../type/type";

export const editContext = createContext<undefined | editContextProps>(undefined)