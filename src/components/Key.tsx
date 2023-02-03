
interface KeyProps {
  keyName: string;
}

export function Key({ keyName }: KeyProps) {
  return (
    <div>
      {keyName}
    </div>
  )
}
