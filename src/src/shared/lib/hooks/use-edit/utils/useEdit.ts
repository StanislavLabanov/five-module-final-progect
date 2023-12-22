import { useContext } from "react";
import { editContext } from "../../../../../app/context/edit";

export const useEdit = () => useContext(editContext)