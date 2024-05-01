// Importa Hook de Autenticação
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

// Importa conexão com backend (api)
import { api } from "../../services/api"
import { FaPowerOff } from "react-icons/fa6"
import { Container, Profile, Logout } from "./styles"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header() {
  // Acessa a função de signOut do useAuth
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  // Declara a URL do avatar e se não houver, coloca o placeholder
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      {/* Passamos a função signOut no click do componente Logout */}
      <Logout onClick={handleSignOut}>
        <FaPowerOff />
      </Logout>
    </Container>
  )
}
