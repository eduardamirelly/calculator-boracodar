import { CalculatorDisplay } from './components/CalculatorDisplay';
import { CalculatorKeyboard } from './components/CalculatorKeyboard';
import './global.css';

function App() {
  return (
    <div className="bg-calculator">
      <CalculatorDisplay />
      <CalculatorKeyboard />
    </div>
  )
}

export default App
