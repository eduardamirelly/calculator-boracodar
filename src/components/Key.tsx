import React from "react";

export interface KeyProps {
  code: '0'| '1'| '2'| '3'| '4'| '5'| '6'| '7'| '8'| '9'|
        'ce'| 'c'| '%'| '/'| 'x'| '-'| '+'| '='| '+-'| ',';
  keyName?: string;
  children?: React.ReactNode;
  color?: 'violet' | 'white';
  backgroundColor?: '1' | '2' | '3';
  onClick?: () => void,
}

export function Key({
  keyName,
  children,
  color = 'white',
  backgroundColor = '1',
  onClick,
}: KeyProps) {
  return (
    <div
      onClick={onClick}
      className={
        `body-calculator-key
        ${color == 'violet' ? 'text-violet-500' : 'text-white-500'}
        ${backgroundColor == '1' ? 'bg-[#2D2A37] hover:bg-[#464452]' :
          backgroundColor == '2' ? 'bg-violet-600 hover:bg-violet-400' :
                                  'bg-violet-300 hover:bg-violet-400'}`}>
      {keyName ? keyName : children}
    </div>
  )
}
