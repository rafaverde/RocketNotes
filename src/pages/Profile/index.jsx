import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./style"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react"

export function Profile() {
  // Acessa o usuário e o updateProfile no hook de autenticação
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState(user.oldPassword)
  const [newPassword, setNewPassword] = useState(user.newPassword)

  // Declara a URL do avatar e se não houver, coloca o placeholder
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  // Estado que atualiza o avatar, caso já exista, pega o atual
  const [avatar, setAvatar] = useState(avatarURL)
  // Estado que capta o caminho do artquivo do novo Avatar
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    }

    await updateProfile({ user, avatarFile })
  }

  // Lida com o clique para mudança do avatar
  function handleChangeAvatar(event) {
    // Pega o arquivo na primeira posição da transferência de dados
    const file = event.target.files[0]

    // Coloca no estado o arquivo que o usuário selecionar
    setAvatarFile(file)

    // Passa o caminho do avatar para o estado do avatar atual
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate}></Button>
      </Form>
    </Container>
  )
}
