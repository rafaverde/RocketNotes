import { Container, Profile } from "./style"

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/rafaverde.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Rafael Valverde</strong>
        </div>
      </Profile>
    </Container>
  )
}
