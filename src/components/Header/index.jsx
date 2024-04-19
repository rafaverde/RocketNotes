// Importa Hook de Autenticação
import { useAuth } from "../../hooks/auth"
import { FaPowerOff } from "react-icons/fa6"
import { Container, Profile, Logout } from "./styles"

export function Header() {
  // Acessa a função de signOut do useAuth
  const { signOut } = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/rafaverde.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Rafael Valverde</strong>
        </div>
      </Profile>

      {/* Passamos a função signOut no click do componente Logout */}
      <Logout onClick={signOut}>
        <FaPowerOff />
      </Logout>
    </Container>
  )
}
