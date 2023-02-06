import { Equals } from "phosphor-react";
import { useState } from "react";

export function CalculatorDisplay() {
  const [result, setResult] = useState('...');
  const [operations, setOperations] = useState('...');

  return (
    <div className="head-calculator">
        <div className="head-calculator-operations">{operations}</div>
        <div className="head-calculator-result">
          <span>
            <Equals size={24} color="#6B6B6B" />
          </span>
          <span className="text-[2rem]">{result}</span>
        </div>
      </div>
  )
}
