import React from "react";

interface KeyProps {
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
      ${backgroundColor ? 'bg-violet-600' : 'bg-[#2D2A37]'}
    `}>
      {keyName ? keyName : children}
    </div>
  )
}
