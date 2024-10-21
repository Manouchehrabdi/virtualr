import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLogin from './AppLogin.jsx'

import './index.css'

createRoot(document.getElementById('root1')).render(
  <StrictMode>
    <AppLogin />
  </StrictMode>,
)
