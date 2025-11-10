import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MainConext from './context/MainConext.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <MainConext>
    <ToastContainer position="top-center" />
    <App />
  </MainConext>,
)
