import { Container, Brand, Menu, Search, Content, NewNotes } from "./styles"

import { Header } from "../../components/Header"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header></Header>

      <Menu></Menu>

      <Search></Search>

      <Content></Content>

      <NewNotes></NewNotes>
    </Container>
  )
}
