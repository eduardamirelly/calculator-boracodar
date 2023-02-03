import React from "react";

interface KeyProps {
  keyName?: string;
  children?: React.ReactNode;
  color?: 'violet' | 'whiteSoft';
}

export function Key({ keyName, children, color = 'whiteSoft' }: KeyProps) {
  return (
    <div className={`body-calculator-key ${'text-' + color}`}>
      {keyName ? keyName : children}
    </div>
  )
}
