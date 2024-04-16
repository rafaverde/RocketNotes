// Importa o módulo de contexto e o hook de uso do contexto do react
import { createContext, useContext, useState } from "react"

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

      // Adiciona o token Bearer na autorização do cabeçalho padrão
      // de todas as requisições que o usuário fizer
      api.defaults.headers.authorization = `Bearer ${token}`

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

  return (
    // Compartilha a função singIn e os dados de usuário no provider
    <AuthContext.Provider value={{ signIn, user: data.user }}>
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
