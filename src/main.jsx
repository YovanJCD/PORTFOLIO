import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        color: '#222',
        minHeight: '100vh',
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
