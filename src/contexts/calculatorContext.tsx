import { createContext, useState } from "react";

interface CalculatorContextType {
  currentValue: string;
  operation: string;
  prevValue: string;
  operationsView: string;
  handleKeyClickNumber: (keyCode: string) => void;
  handleKeyClickOperation: (keyCode: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextType>({} as CalculatorContextType);

interface CalculatorContextProviderProps {
  children: React.ReactNode;
}


export function CalculatorContextProvider({children}: CalculatorContextProviderProps) {
  const [prevValue, setPrevValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [operation, setOperation] = useState('');
  const [operationsView, setOperationsView] = useState('...');

  const handleKeyClickNumber = (keyCode: string) => {
    setOperationsView(operationsView == '...' ? keyCode : `${operationsView} ${keyCode}`);
    setPrevValue(prevValue ? prevValue : keyCode);
    setCurrentValue(operation ? currentValue ? currentValue : keyCode : '');
  }

  const handleKeyClickOperation = (keyCode: string) => {
    setOperation(prevValue ? keyCode : '');
    setOperationsView(operation == '...' ? keyCode : `${operationsView} ${keyCode}`);
  }

  return (
    <CalculatorContext.Provider value={{
      currentValue,
      operation,
      prevValue,
      operationsView,
      handleKeyClickNumber,
      handleKeyClickOperation
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}
