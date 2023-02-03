
interface KeyProps {
  keyName: string;
}

export function Key({ keyName }: KeyProps) {
  return (
    <div className="body-calculator-key">
      {keyName}
    </div>
  )
}
