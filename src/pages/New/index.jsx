import { Container, Form } from "./styles"
import { FiChevronLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

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

          <Section title="Links úteis">
            <NoteItem value="https://www.rocketseat.com.br"></NoteItem>
            <NoteItem placeholder="https://www.novolink.com" isNew></NoteItem>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"></NoteItem>
              <NoteItem value="explorer"></NoteItem>

              <NoteItem isNew placeholder="Nova Tag"></NoteItem>
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
