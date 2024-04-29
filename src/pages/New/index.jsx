import { useState } from "react"

import { Container, Form } from "./styles"
import { FiChevronLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // Cria estado para armazenar os links
  const [links, setLinks] = useState([])
  // Cria estado para armazenar o link adicionado
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  // Instancia o useNavigate
  const navigate = useNavigate()

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
    setLinks((prevState) =>
      prevState.filter((link, index) => index !== deleted)
    )
  }

  function handleNewTag() {
    if (!newTag) {
      alert("Não pode ser vazio, digite uma tag")
    } else {
      setTags((prevState) => [...prevState, newTag])
      setNewTag("")
    }
  }

  function handleRemoveTag(deleted) {
    console.log(deleted)
    setTags((prevState) => prevState.filter((tag, index) => index !== deleted))
    console.log(tags)
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Título não pode ser vazio.")
    }

    if (newLink || newTag) {
      return alert(
        "Você deixou um link ou tag digitada, mas não adicionou. Limpe o campo ou clique em adicionar (+)"
      )
    }

    const note = { title, description, tags, links }

    await api.post("/notes", note)

    alert("Nota cadastrada com sucesso!")
    navigate("/")
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
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {
                  handleRemoveLink(index)
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
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(index)
                  }}
                ></NoteItem>
              ))}

              <NoteItem
                placeholder="Nova Tag"
                isNew
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleNewTag}
              ></NoteItem>
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
