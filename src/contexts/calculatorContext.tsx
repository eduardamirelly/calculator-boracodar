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

  const [operationSelect, setOperationSelect] = useState(false);

  const handleKeyClickNumber = (keyCode: string) => {
    setOperationsView(operationsView == '...' ? keyCode : `${operationsView} ${keyCode}`);
    setPrevValue(keyCode);
    setCurrentValue(operation ? currentValue ? currentValue : keyCode : '');
    setResult(keyCode);
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
    setOperationSelect(true);

    if(currentValue && prevValue) {
      switch (keyCode) {
        case '+':
          let sumResult = handleSum(Number(prevValue), Number(currentValue));
          setResult(sumResult);
          setPrevValue(sumResult);
          setCurrentValue('');
          setOperation('');
          setOperationsView(sumResult);
        default:
          console.log('default');
      }
    }
  }

  const handleSum = (a: number, b: number) => {
    return (a + b).toString();
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
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}
