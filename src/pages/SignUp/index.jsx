import { useState } from "react"
import { Container, Form, Background } from "./styles"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos.")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
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
        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  )
}
