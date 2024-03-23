import { FaCirclePlus, FaMagnifyingGlass } from "react-icons/fa6"
import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles"

import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText title="Todos" $isactive></ButtonText>
        </li>
        <li>
          <ButtonText title="Frontend"></ButtonText>
        </li>
        <li>
          <ButtonText title="React"></ButtonText>
        </li>
        <li>
          <ButtonText title="Node"></ButtonText>
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FaMagnifyingGlass} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "explorer" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNotes to="/new">
        <FaCirclePlus />
        <span>Criar Nota</span>
      </NewNotes>
    </Container>
  )
}
