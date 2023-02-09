import { createContext, useState } from "react";

interface CalculatorContextType {
  currentValue: string;
  operation: string;
  prevValue: string;
  operationsView: string;
  result: string;
  handleKeyClickNumber: (keyCode: string) => void;
  handleKeyClickOperation: (keyCode: string) => void;
  handleClearAll: () => void;
  handleResultOperation: () => void;
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
  const [result, setResult] = useState('...');

  const handleKeyClickNumber = (keyCode: string) => {
    setResult(keyCode);
    setOperationsView(operationsView == '...' ? keyCode : `${operationsView} ${keyCode}`);
    setPrevValue(operation ? prevValue : prevValue+keyCode);
    setCurrentValue(operation ? currentValue+keyCode : currentValue);
  }

  const handleClearAll = () => {
    setPrevValue('');
    setCurrentValue('');
    setOperation('');
    setOperationsView('...');
    setResult('...');
  }

  const handleKeyClickOperation = (keyCode: string) => {
    setOperationsView(!operation && prevValue ? `${operationsView} ${keyCode}` : operationsView);
    setOperation(prevValue ? operation ? operation : keyCode : '');
  }

  const handleResultOperation = () => {
    if(currentValue && prevValue) {
      switch (operation) {
        case '+':
          let sumResult = handleSum(Number(prevValue), Number(currentValue));
          setResult(sumResult);
          setPrevValue(sumResult);
          setCurrentValue('');
          setOperation('');
          setOperationsView(sumResult);
          break;
        case '-':
          let subtractionResult = handleSubtraction(Number(prevValue), Number(currentValue));
          setResult(subtractionResult);
          setPrevValue(subtractionResult);
          setCurrentValue('');
          setOperation('');
          setOperationsView(subtractionResult);
          break;
        default:
          console.log('default');
          break;
      }
    }
  }

  const handleSum = (a: number, b: number) => {
    return (a + b).toString();
  }

  const handleSubtraction = (a: number, b: number) => {
    return (a - b).toString();
  }

  return (
    <CalculatorContext.Provider value={{
      currentValue,
      operation,
      prevValue,
      operationsView,
      result,
      handleKeyClickNumber,
      handleKeyClickOperation,
      handleClearAll,
      handleResultOperation,
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}
