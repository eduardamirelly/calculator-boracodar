import { Equals } from "phosphor-react";
import { useCalculator } from "../hooks/useCalculator";

export function CalculatorDisplay() {
  const { operationsView, result } = useCalculator();

  return (
    <div className="head-calculator">
        <div className="head-calculator-operations">{operationsView}</div>
        <div className="head-calculator-result">
          <span>
            <Equals size={24} color="#6B6B6B" />
          </span>
          <span className="text-[2rem]" id="result">{result}</span>
        </div>
      </div>
  )
}
