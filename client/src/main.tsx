import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeProvider } from './contexts/DarkModeContext';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
)
