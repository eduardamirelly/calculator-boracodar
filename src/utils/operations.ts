const handleSum = (a: number, b: number) => {
  return (a + b).toString();
}

const handleSubtraction = (a: number, b: number) => {
  return (a - b).toString();
}

const handleMultiplication = (a: number, b: number) => {
  return (a * b).toString();
}

const handleDivision = (a: number, b: number) => {
  return (a / b).toString();
}

const handlePlusOrMinus = (a: number, isNegative: boolean) => {
  return (isNegative ? a : -a).toString();
}

const handlePercent = (a: number) => {
  return (a / 100).toString();
}

export default {
  handleSum,
  handleSubtraction,
  handleMultiplication,
  handleDivision,
  handlePlusOrMinus,
  handlePercent,
}
