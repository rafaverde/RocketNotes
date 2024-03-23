import { FaPowerOff } from "react-icons/fa6"
import { Container, Profile, Logout } from "./styles"

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/rafaverde.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Rafael Valverde</strong>
        </div>
      </Profile>

      <Logout>
        <FaPowerOff />
      </Logout>
    </Container>
  )
}
