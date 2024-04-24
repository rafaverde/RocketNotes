import { useState } from "react"

import { Container, Form } from "./styles"
import { FiChevronLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function New() {
  // Cria estado para armazenar os links
  const [links, setLinks] = useState([])
  // Cria estado para armazenar o link adicionado
  const [newLink, setNewLink] = useState("")

  // Lida com click ao adicionar novo link
  function handleAddLink() {
    // Verifica se está vazio
    if (!newLink) {
      alert("Não pode ser vazio, digite um link")
    } else {
      // Define o estado atual, pegando o que já esxiste nele e monta um novo vetor
      setLinks((prevState) => [...prevState, newLink])
      // Reseta o estado do link para um novo ser usado
      setNewLink("")
    }
  }

  // Lida com o clique de deletar link
  function handleRemoveLink(deleted) {
    // Coloca no estado, uma lista filtrando o que for passado em deleted
    // gerando uma lista apenas com o que for diferente dele
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <Link to="/">
              <FiChevronLeft />
              Voltar
            </Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {
                  handleRemoveLink(link)
                }}
              ></NoteItem>
            ))}

            <NoteItem
              placeholder="https://www.novolink.com"
              isNew
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            ></NoteItem>
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
