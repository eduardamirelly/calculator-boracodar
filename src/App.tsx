import { Equals } from 'phosphor-react';
import { useState } from 'react';
import { CalculatorKeyboard } from './components/CalculatorKeyboard';
import './global.css';

function App() {
  const [result, setResult] = useState('...');
  const [operations, setOperations] = useState('...');

  return (
    <div className="bg-calculator">
      <div className="head-calculator">
        <div className="head-calculator-operations">{operations}</div>
        <div className="head-calculator-result">
          <span>
            <Equals size={24} color="#6B6B6B" />
          </span>
          <span className="text-[2rem]">{result}</span>
        </div>
      </div>

      <CalculatorKeyboard />
    </div>
  )
}

export default App
