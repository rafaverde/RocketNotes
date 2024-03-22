import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { FiChevronLeft } from "react-icons/fi"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <a href="/">
              <FiChevronLeft />
              Voltar
            </a>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
        </Form>
      </main>
    </Container>
  )
}
