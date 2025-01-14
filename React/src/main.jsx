import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import './assets/output.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Todo componente tem a letra maíscula

// <App>
//    Isso também pode acontecer dependendo da demanda
// </App>
