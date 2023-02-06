import { createContext } from "react";

interface CalculatorContextType {

}

export const CalculatorContext = createContext<CalculatorContextType>({});

interface CalculatorContextProviderProps {
  children: React.ReactNode;
}


export function CalculatorContextProvider({children}: CalculatorContextProviderProps) {
  return (
    <CalculatorContext.Provider value={{}}>
      {children}
    </CalculatorContext.Provider>
  )
}
