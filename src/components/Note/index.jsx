import { FaRegStickyNote } from "react-icons/fa"
import { Container, NoteHeader } from "./styles"
import { Tag } from "../Tag"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <NoteHeader>
        <FaRegStickyNote />
        <h1>{data.title}</h1>
      </NoteHeader>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
