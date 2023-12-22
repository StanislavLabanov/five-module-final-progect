import { createContext } from "react";
import { valueContextProps } from "../type/type";

export const valueContext = createContext<undefined | valueContextProps>(undefined)