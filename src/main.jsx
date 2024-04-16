import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"

// Importamos o provedor de contextos e encapsulamos nossas rotas abaixo.
import { AuthProvider } from "./hooks/auth"

import theme from "./styles/theme"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
