import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Sidebar } from './components/sidebar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sidebar></Sidebar>
  </StrictMode>,
)
