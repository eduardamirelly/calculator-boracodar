import { Equals, Plus, X } from "phosphor-react";
import { useCalculator } from "../hooks/useCalculator";
import { Key } from "./Key";

export function CalculatorKeyboard() {
  const {
    handleKeyClickNumber,
    handleKeyClickOperation,
    handleClearAll,
    handleResultOperation
  } = useCalculator();

  return (
    <div className="body-calculator">
      <Key code="ce" keyName="CE" color="violet" onKeyClick={handleClearAll} />
      {/* <Key code="c" keyName="C" />
      <Key code="%" children={<Percent size={28} />} />
      <Key code="/" children={<Divide size={28} />} backgroundColor="2" /> */}

      <Key code="7" keyName="7" onKeyClick={handleKeyClickNumber} />
      <Key code="8" keyName="8" onKeyClick={handleKeyClickNumber}  />
      <Key code="9" keyName="9" onKeyClick={handleKeyClickNumber} />
      <Key code="x" children={<X size={28} />} backgroundColor="2" onKeyClick={handleKeyClickOperation} />

      <Key code="4" keyName="4" onKeyClick={handleKeyClickNumber} />
      <Key code="5" keyName="5" onKeyClick={handleKeyClickNumber} />
      <Key code="6" keyName="6" onKeyClick={handleKeyClickNumber} />
      {/* <Key code="-" children={<Minus size={28} />} backgroundColor="2" /> */}

      <Key code="1" keyName="1" onKeyClick={handleKeyClickNumber} />
      <Key code="2" keyName="2" onKeyClick={handleKeyClickNumber} />
      <Key code="3" keyName="3" onKeyClick={handleKeyClickNumber} />
      <Key code="+" children={<Plus size={28} />} backgroundColor="2" onKeyClick={handleKeyClickOperation} />

      {/* <Key code="+-" children={<PlusMinus size={28} />} backgroundColor="2" /> */}
      <Key code="0" keyName="0" onKeyClick={handleKeyClickNumber} />
      {/* <Key code="," keyName="," /> */}
      <Key code="=" children={<Equals size={28} />} backgroundColor="3" onKeyClick={handleResultOperation} />
    </div>
  )
}
