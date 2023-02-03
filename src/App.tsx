import { Equals } from 'phosphor-react';
import { Key } from './components/Key';
import './global.css';

function App() {
  return (
    <div className="bg-calculator">
      <div className="head-calculator">
        <div className="head-calculator-operations">1 + 1</div>
        <div className="head-calculator-result">
          <span>
            <Equals size={24} color="#6B6B6B" />
          </span>
          <span className="text-[2rem]">2</span>
        </div>
      </div>

      <div className="body-calculator">
        <Key keyName="CE" />
        <Key keyName="C" />
        <Key keyName="%" />
        <Key keyName="/" />
      </div>
    </div>
  )
}

export default App
