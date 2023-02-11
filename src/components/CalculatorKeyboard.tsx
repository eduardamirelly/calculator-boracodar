import { Divide, Equals, Minus, Percent, Plus, PlusMinus, X } from "phosphor-react";
import { useCalculator } from "../hooks/useCalculator";
import { Key } from "./Key";

export function CalculatorKeyboard() {
  const {
    handleKeyClickNumber,
    handleKeyClickOperation,
    handleClearAll,
    handleResultOperation,
    handleClearCurrentKeyPressed,
    handleKeyClickPlusMinus,
    handleKeyClickAddDot,
    handleKeyClickPercent,
  } = useCalculator();

  return (
    <div className="body-calculator">
      <Key id="key-ce" code="ce" keyName="CE" color="violet" onKeyClick={handleClearCurrentKeyPressed} />
      <Key id="key-c" code="c" keyName="C" onKeyClick={handleClearAll} />
      <Key id="key-percent" code="%" children={<Percent size={28} />} onKeyClick={handleKeyClickPercent} />
      <Key id="key-divide" code="/" children={<Divide size={28} />} backgroundColor="2" onKeyClick={handleKeyClickOperation} />

      <Key id="key-7" code="7" keyName="7" onKeyClick={handleKeyClickNumber} />
      <Key id="key-8" code="8" keyName="8" onKeyClick={handleKeyClickNumber}  />
      <Key id="key-9" code="9" keyName="9" onKeyClick={handleKeyClickNumber} />
      <Key id="key-multiplication" code="x" children={<X size={28} />} backgroundColor="2" onKeyClick={handleKeyClickOperation} />

      <Key id="key-4" code="4" keyName="4" onKeyClick={handleKeyClickNumber} />
      <Key id="key-5" code="5" keyName="5" onKeyClick={handleKeyClickNumber} />
      <Key id="key-6" code="6" keyName="6" onKeyClick={handleKeyClickNumber} />
      <Key id="key-minus" code="-" children={<Minus size={28} />} backgroundColor="2" onKeyClick={handleKeyClickOperation} />

      <Key id="key-1" code="1" keyName="1" onKeyClick={handleKeyClickNumber} />
      <Key id="key-2" code="2" keyName="2" onKeyClick={handleKeyClickNumber} />
      <Key id="key-3" code="3" keyName="3" onKeyClick={handleKeyClickNumber} />
      <Key id="key-plus" code="+" children={<Plus size={28} />} backgroundColor="2" onKeyClick={handleKeyClickOperation} />

      <Key id="key-plusminus" code="+-" children={<PlusMinus size={28} />} backgroundColor="2" onKeyClick={handleKeyClickPlusMinus} />
      <Key id="key-0" code="0" keyName="0" onKeyClick={handleKeyClickNumber} />
      <Key id="key-dot" code="." keyName="." onKeyClick={handleKeyClickAddDot} />
      <Key id="key-equals" code="=" children={<Equals size={28} />} backgroundColor="3" onKeyClick={handleResultOperation} />
    </div>
  )
}
