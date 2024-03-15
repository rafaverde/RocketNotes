import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>Introdução ao React.js</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            nam laborum. Et veritatis repudiandae voluptatibus perferendis,
            distinctio aliquid impedit necessitatibus officia quibusdam eligendi
            expedita alias molestias. Ad beatae aliquid odit.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="explorer"></Tag>
            <Tag title="nodejs"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
