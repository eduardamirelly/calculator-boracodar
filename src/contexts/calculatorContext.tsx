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
  handleClearCurrentKeyPressed: () => void;
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
    if(result == '...') setResult(keyCode);
    if(result != '...') setResult(operation ? prevValue && !currentValue ? keyCode : `${result}${keyCode}` : `${result}${keyCode}`);
    setOperationsView(operationsView == '...' ? keyCode : `${operationsView}${keyCode}`);
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

  const handleClearCurrentKeyPressed = () => {
    switch (result) {
      case currentValue:
        setOperationsView(operationsView.slice(0, operationsView.length - currentValue.length));
        setCurrentValue('');
        break;
      case prevValue:
        if(!operation) {
          setOperationsView(operationsView.slice(0, operationsView.length - prevValue.length));
          setPrevValue('');
          setOperationsView('...');
        }
        break;
      default: break;
    }
    setResult('...');
  }

  const handleKeyClickOperation = (keyCode: string) => {
    setOperationsView(!operation && prevValue ? `${operationsView} ${keyCode} ` : operationsView);
    setOperation(prevValue ? operation ? operation : keyCode : '');
  }

  const handleResultOperation = () => {
    if(currentValue && prevValue) {
      let resultOperation = '';

      switch (operation) {
        case '+':
          resultOperation = handleSum(Number(prevValue), Number(currentValue));
          break;
        case '-':
          resultOperation = handleSubtraction(Number(prevValue), Number(currentValue));
          break;
        case 'x':
          resultOperation = handleMultiplication(Number(prevValue), Number(currentValue));
        case '/':
          resultOperation = handleDivision(Number(prevValue), Number(currentValue));
        default:
          console.log('default');
          break;
      }

      setResult(resultOperation);
      setPrevValue(resultOperation);
      setOperationsView(resultOperation);
      setCurrentValue('');
      setOperation('');
    }
  }

  const handleSum = (a: number, b: number) => {
    return (a + b).toString();
  }

  const handleSubtraction = (a: number, b: number) => {
    return (a - b).toString();
  }

  const handleMultiplication = (a: number, b: number) => {
    return (a * b).toString();
  }

  const handleDivision = (a: number, b: number) => {
    return (a / b).toString();
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
      handleClearCurrentKeyPressed,
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}
