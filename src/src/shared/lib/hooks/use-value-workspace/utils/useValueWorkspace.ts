import { useContext } from "react";
import { valueContext } from "../../../../../app/context/value";

export const useValueWorkspace = () => useContext(valueContext)