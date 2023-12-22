import { useContext } from "react";
import { authContext } from "../../../../../app/context/auth";

export const useAuth = () => useContext(authContext)