import { BrowserRouter } from "react-router-dom"
// Importa Hook de autenticação
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
  // Acessa o user dentro de useAuth
  const { user } = useAuth()

  return (
    <BrowserRouter>
      {/* Se existe o usuário, renderiza rota do AppRoutes, se não, AuthRoutes */}
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
