import { useState, useEffect } from "react"

import { FaCirclePlus, FaMagnifyingGlass } from "react-icons/fa6"
import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles"

import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"
import { api } from "../../services/api"

export function Home() {
  //Estado para a pesquisa de notas
  const [search, setSearch] = useState("")
  // Estado para puxar as tags
  const [tags, setTags] = useState([])
  // Estado para guardar as tags selecionadas
  const [tagsSelected, setTagsSelected] = useState([])
  // Estado para puxar as notas
  const [notes, setNotes] = useState([])

  // Lida com tag quando selecionada recebendo o nome da tag como parâmetro
  function handleTagSelected(tagName) {
    // Verifica se o filtro de tag Todos foi clicado e tira os outro filtros
    if (tagName === "all") {
      // Zera o array das tags selecionadas
      return setTagsSelected([])
    }

    // Verifica se a tag clicada já existe entre as selecionadas
    const alreadySelected = tagsSelected.includes(tagName)

    // Caso retorne verdadeiro, retira a tag da lista de selecionadas
    if (alreadySelected) {
      // Filtra as tags que retorna uma nova lista sem a tag clicada.
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      console.log(filteredTags)
      console.log(tagsSelected.length)
      // Atualiza estado com as tags selecionadas
      setTagsSelected(filteredTags)
    } else {
      // Atualizao estado, incluindo o que continha e o que foi clicado
      setTagsSelected((prevState) => [...prevState, tagName])
    }
  }

  // Quando carregar o componente Home, executa o código buscando as tags no inicio
  useEffect(() => {
    // Função para buscar as tags em nossa api.
    async function fetchTags() {
      // Busca as tags na api e aloca em response
      const response = await api.get("/tags")
      // Atualiza o estado das Tags com o conteúdo de tags do banco de dados
      setTags(response.data)
    }

    fetchTags()
  }, [])

  // Executa busca quando tags ou search for alterado
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            $isactive={tagsSelected.length === 0}
          ></ButtonText>
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                // Inclui o valor do nome da tag no estado setSelectedTag passando o nome da tag
                onClick={() => handleTagSelected(tag.name)}
                // Verifica se a tag está no estado e se sim, ela é selecionada
                $isactive={tagsSelected.includes(tag.name)}
              ></ButtonText>
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FaMagnifyingGlass}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note key={String(note.id)} data={note} />
          ))}
        </Section>
      </Content>

      <NewNotes to="/new">
        <FaCirclePlus />
        <span>Criar Nota</span>
      </NewNotes>
    </Container>
  )
}
