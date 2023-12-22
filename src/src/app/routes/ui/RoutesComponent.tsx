import { FC } from "react"
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from "../../../shared/ui/private-route";
import { Home, Login } from "../const/pages";


export const RoutesComponent: FC = () => {
   return (
      <Routes>
         <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
         <Route path="/login" element={<Login />} />
      </Routes>
   )
}