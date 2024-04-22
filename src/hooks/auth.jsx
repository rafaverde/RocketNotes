// Importa o módulo de contexto e o hook de uso do contexto do react
import { createContext, useContext, useEffect, useState } from "react"

// Importa conexão com o backend para enviar informações
import { api } from "../services/api"

// Criamos o nosso contexto de autenticação e passamos um objeto vazio como parâmetro
export const AuthContext = createContext({})

// Função que vai prover os dados de autenticação e recebe children
// como parametro, que são as rotas da nossa aplicação. Quando houver o valor
// do provedor ele retorna a rota.
function AuthProvider({ children }) {
  // Cria o estado data para armazenar o user e o token
  const [data, setData] = useState({})

  // Função de autenticação
  async function signIn({ email, password }) {
    // Tenta executar a requisição
    try {
      // Requisição POST enviando ao backend, uma sessão com email e password
      const response = await api.post("/sessions", { email, password })
      // Separa apenas o user e password da resposta da requisição
      const { user, token } = response.data

      // Armazena no navegador as informações do usuário convertendo em string
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      // Armazena no navegador as informações do token que já é em string
      localStorage.setItem("@rocketnotes:token", token)

      // Adiciona o token Bearer na autorização do cabeçalho padrão
      // de todas as requisições que o usuário fizer
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      // Armazenamos as respostas do usuário e token no estado data
      setData({ user, token })

      console.log(user, token)
    } catch (error) {
      // Caso haja algum erro com response
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível fazer login")
      }
    }
  }

  // Função de logout
  function signOut() {
    // Remove as chaves do Local Storage
    localStorage.removeItem("@rocketnotes:user")
    localStorage.removeItem("@rocketnotes:token")

    // Limpa o estado que contém os dados de acesso
    setData({})
  }

  // Função de atualiação do perfil
  async function updateProfile({ user }) {
    try {
      // Conecta com backend e envia os dados
      await api.put("/users", user)

      // Atualiza o localStorage com os novos dados convertendo em string
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

      // Atualiza o estado do componente com novos dados do usuário e o token que já existe
      setData({ user, token: data.token })

      alert("Perfil atualizado com sucesso!")
    } catch (error) {
      // Caso haja algum erro com response
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  // useEffect para puxar as informações de login no localStorage para o estado.
  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token")
    const user = localStorage.getItem("@rocketnotes:user")

    // Verificar se user e token foram informados
    if (user && token) {
      // Adiciona o token Bearer na autorização do cabeçalho padrão
      // de todas as requisições que o usuário fizer
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      // Armazenamos as respostas do usuário e token no estado data
      // convertendo o user novamente em objeto
      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    // Compartilha a função singIn, signOut, updateProfile
    // e os dados de usuário no provider
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Hook que executa o contexto de autenticação
function useAuth() {
  // Aloca o contexto de autenticação e retorna os dados
  const context = useContext(AuthContext)

  return context
}

// Exporta as funções
export { AuthProvider, useAuth }
