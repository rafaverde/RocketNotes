import { Container, Form, Background } from "./styles"
import { FiUser, FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="E-mail" icon={FiMail} type="text" />
        <Input placeholder="Senha" icon={FiLock} type="password" />
        <Button title="Cadastrar" />

        <a href="#">Voltar para o Login</a>
      </Form>
    </Container>
  )
}
