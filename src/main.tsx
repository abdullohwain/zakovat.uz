import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MainConext from './context/MainConext.tsx'

createRoot(document.getElementById('root')!).render(
  <MainConext>
    <App />
  </MainConext>,
)
