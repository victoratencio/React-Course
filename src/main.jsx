import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitExpertApp } from './GitExpertApp.jsx'

import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitExpertApp />
  </StrictMode>,
)
