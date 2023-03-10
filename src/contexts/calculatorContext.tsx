import { createContext, useState } from "react";
import operations from "../utils/operations";

interface CalculatorContextType {
  operationsView: string;
  result: string;
  handleKeyClickNumber: (keyCode: string) => void;
  handleKeyClickOperation: (keyCode: string) => void;
  handleClearAll: () => void;
  handleResultOperation: () => void;
  handleClearCurrentKeyPressed: () => void;
  handleKeyClickPlusMinus: () => void;
  handleKeyClickAddDot: () => void;
  handleKeyClickPercent: () => void;
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

  const handleKeyClickPlusMinus = () => {
    switch (result) {
      case currentValue:
        let newCurrentValue = operations.handlePlusOrMinus(Number(currentValue), Number(currentValue) < 0);
        setCurrentValue(newCurrentValue);
        setResult(newCurrentValue);
        break;
      case prevValue:
        let newPrevValue = operations.handlePlusOrMinus(Number(prevValue), Number(prevValue) < 0);
        setPrevValue(newPrevValue);
        setResult(newPrevValue);
        break;
      default: break;
    }
  }

  const handleKeyClickAddDot = () => {
    switch (result) {
      case currentValue:
        setCurrentValue(`${currentValue}.`);
        setResult(`${currentValue}.`);
        setOperationsView(`${operationsView}.`);
        break;
      case prevValue:
        setPrevValue(`${prevValue}.`);
        setResult(`${prevValue}.`);
        setOperationsView(`${operationsView}.`);
        break;
      default: break;
    }
  }

  const handleKeyClickPercent = () => {
    switch (result) {
      case currentValue:
        let currentValuePercent = operations.handlePercent(Number(currentValue));
        setCurrentValue(currentValuePercent);
        setResult(currentValuePercent);
        setOperationsView(`${operationsView.slice(0, operationsView.length - currentValue.length)} ${currentValuePercent}`);
        break;
      case prevValue:
        let prevValuePercent = operations.handlePercent(Number(prevValue));
        setPrevValue(prevValuePercent);
        setResult(prevValuePercent);
        setOperationsView(prevValuePercent);
        break;
      default: break;
    }
  }

  const handleResultOperation = () => {
    if(currentValue && prevValue) {
      let resultOperation = '';

      switch (operation) {
        case '+':
          resultOperation = operations.handleSum(Number(prevValue), Number(currentValue));
          break;
        case '-':
          resultOperation = operations.handleSubtraction(Number(prevValue), Number(currentValue));
          break;
        case 'x':
          resultOperation = operations.handleMultiplication(Number(prevValue), Number(currentValue));
          break;
        case '/':
          resultOperation = operations.handleDivision(Number(prevValue), Number(currentValue));
          break;
        default:
          break;
      }

      setResult(resultOperation);
      setPrevValue(resultOperation);
      setOperationsView(resultOperation);
      setCurrentValue('');
      setOperation('');
    }
  }

  return (
    <CalculatorContext.Provider value={{
      operationsView,
      result,
      handleKeyClickNumber,
      handleKeyClickOperation,
      handleClearAll,
      handleResultOperation,
      handleClearCurrentKeyPressed,
      handleKeyClickPlusMinus,
      handleKeyClickAddDot,
      handleKeyClickPercent,
    }}>
      {children}
    </CalculatorContext.Provider>
  )
}
