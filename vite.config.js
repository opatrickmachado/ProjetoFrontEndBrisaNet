// Importação das dependências
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite
export default defineConfig({

  // Plugins utilizados
  plugins: [
    react(),
  ],

  // Configurações adicionais (opcional)
  server: {
    port: 8080, // Define a porta do servidor
  },

  // Adiciona suporte a JSX
  jsx: {
    factory: 'React.createElement', // Define a função usada para criar elementos
    fragment: 'React.Fragment', // Define o componente usado para envolver elementos
  },

  // Define o diretório de saída
  build: {
    outDir: 'dist',
  },
})
