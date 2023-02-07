import { createContext, useState } from "react";

interface CalculatorContextType {
  currentValue: string;
  operation: string;
  handleKeyClickNumber: (keyCode: string) => void;
}

export const CalculatorContext = createContext<CalculatorContextType>({} as CalculatorContextType);

interface CalculatorContextProviderProps {
  children: React.ReactNode;
}


export function CalculatorContextProvider({children}: CalculatorContextProviderProps) {
  const [currentValue, setCurrentValue] = useState('');
  const [operation, setOperation] = useState('...');

  const handleKeyClickNumber = (keyCode: string) => { //De 0 a 9
    console.log(keyCode)
    // if(['ce', 'c', '%', ',', '+-'].includes(keyCode)) {
    //   return;
    // }
    // if(['+', '-', 'x', '/'].includes(keyCode)) {
    //   return;
    // }
    setOperation(operation == '...' ? keyCode : `${operation} ${keyCode}`);
  }

  return (
    <CalculatorContext.Provider value={{ currentValue, operation, handleKeyClickNumber }}>
      {children}
    </CalculatorContext.Provider>
  )
}
