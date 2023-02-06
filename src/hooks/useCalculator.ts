import { useContext } from "react";
import { CalculatorContext } from "../contexts/calculatorContext";

export const useCalculator = () => {
  return useContext(CalculatorContext);
}
