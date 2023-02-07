import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CalculatorContextProvider } from './contexts/calculatorContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>,
)
