import React from "react";

export interface KeyProps {
  keyName?: string;
  children?: React.ReactNode;
  color?: 'violet' | 'white';
  backgroundColor?: boolean;
}

export function Key({
  keyName,
  children,
  color = 'white',
  backgroundColor = false
}: KeyProps) {
  return (
    <div className={
      `body-calculator-key
      ${color == 'violet' ? 'text-violet-500' : 'text-white-500'}
      ${backgroundColor ? 'bg-violet-600 hover:bg-violet-400' : 'bg-[#2D2A37] hover:bg-[#464452]'}
    `}>
      {keyName ? keyName : children}
    </div>
  )
}
