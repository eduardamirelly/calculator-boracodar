import { Divide, Equals, Minus, Percent, Plus, PlusMinus, X } from "phosphor-react";
import { Key } from "./Key";

export function CalculatorKeyboard() {
  return (
    <div className="body-calculator">
      <Key code="ce" keyName="CE" color="violet" />
      <Key code="c" keyName="C" />
      <Key code="%" children={<Percent size={28} />} />
      <Key code="/" children={<Divide size={28} />} backgroundColor="2" />

      <Key code="7" keyName="7" />
      <Key code="8" keyName="8" />
      <Key code="9" keyName="9" />
      <Key code="x" children={<X size={28} />} backgroundColor="2" />

      <Key code="4" keyName="4" />
      <Key code="5" keyName="5" />
      <Key code="6" keyName="6" />
      <Key code="-" children={<Minus size={28} />} backgroundColor="2" />

      <Key code="1" keyName="1" />
      <Key code="2" keyName="2" />
      <Key code="3" keyName="3" />
      <Key code="+" children={<Plus size={28} />} backgroundColor="2" />

      <Key code="+-" children={<PlusMinus size={28} />} backgroundColor="2" />
      <Key code="0" keyName="0" />
      <Key code="," keyName="," />
      <Key code="=" children={<Equals size={28} />} backgroundColor="3" />
    </div>
  )
}
