import { useState } from "react"
import { Container, Form, Background } from "./styles"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

// Importa hook de autenticação
import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  // Criamos os estados vazios para os inputs
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //Alocamos as informações de autenticação
  const { signIn } = useAuth()

  // Função para lidar com a interação do usuário no clique de signIn
  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Senha"
          icon={FiLock}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
