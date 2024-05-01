import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"

export function Details() {
  // Estado para armazenarmos os dados das notas
  const [data, setData] = useState(null)
  // Instacia o useParams
  const params = useParams()
  // Instacia o useNavigate
  const navigate = useNavigate()

  // Lida com o clique de voltar
  function handleBackButton() {
    navigate("/")
  }

  // Lida com o clique de remover nota
  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    // Função para buscar as informações da nota no backend
    async function fetchNote() {
      // Instancia a resposta passando a rota pelo parametro id aguarda a resposta e passa para a variável
      const response = await api.get(`/notes/${params.id}`)
      // Atualiza estado data com as informações da nota
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {
        // Verifica se existem dados e se houver executa
        data && (
          <main>
            <Content>
              <ButtonText title="Excluir a nota" onClick={handleRemove} />

              {/* Trocamos as informações pelo que foi puxado no estado data */}
              <h1>{data.title}</h1>

              <p>{data.description}</p>

              {data.links && (
                <Section title="Links úteis">
                  <Links>
                    {data.links.map((link) => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </Links>
                </Section>
              )}

              {data.tags && (
                <Section title="Marcadores">
                  {data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name}></Tag>
                  ))}
                </Section>
              )}

              <Button title="Voltar" onClick={handleBackButton} />
            </Content>
          </main>
        )
      }
    </Container>
  )
}
