import { FC } from "react"
import { RoutesComponent } from "./routes"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/auth"
import { EditProvider } from "./context/edit/provider"
import { ValueProvider } from "./context/value/provider"


export const App: FC = () => {
  return (
    <ValueProvider>
      <EditProvider>
        <AuthProvider>
          <BrowserRouter>
            <RoutesComponent />
          </BrowserRouter>
        </AuthProvider>
      </EditProvider>
    </ValueProvider>
  )
}
