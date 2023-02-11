import React from "react";

export interface KeyProps {
  id: string;
  code: '0'| '1'| '2'| '3'| '4'| '5'| '6'| '7'| '8'| '9'|
        'ce'| 'c'| '%'| '/'| 'x'| '-'| '+'| '='| '+-'| '.';
  keyName?: string;
  children?: React.ReactNode;
  color?: 'violet' | 'white';
  backgroundColor?: '1' | '2' | '3';
  onKeyClick: (keyCode: string) => void,
}

export function Key({
  id,
  code,
  keyName,
  children,
  color = 'white',
  backgroundColor = '1',
  onKeyClick,
}: KeyProps) {
  return (
    <div
      id={id}
      onClick={() => onKeyClick(code)}
      className={
        `body-calculator-key
        ${color == 'violet' ? 'text-violet-500' : 'text-white-500'}
        ${backgroundColor == '1' ? 'bg-bgKeyButtonDefault bg-[#2D2A37] hover:bg-[#464452]' :
          backgroundColor == '2' ? 'bg-bgKeyButtonVioletMedium bg-violet-600 hover:bg-violet-400' :
                                   'bg-bgKeyButtonVioletLight bg-violet-300 hover:bg-violet-400'}`}>
      {keyName ? keyName : children}
    </div>
  )
}
