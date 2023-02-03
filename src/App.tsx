import { Divide, Equals, Percent } from 'phosphor-react';
import { Key, KeyProps } from './components/Key';
import './global.css';

const keys: KeyProps[] = [
  {
    children: '',
    keyName: 'CE',
    color: 'violet',
    backgroundColor: false,
  },
  {
    children: '',
    keyName: 'C',
    color: 'white',
    backgroundColor: false,
  },
  {
    children: <Percent size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: false,
  },
  {
    children: <Divide size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: true,
  },
]

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
        {keys.map((key, index) => (
          <Key
            key={index}
            keyName={key.keyName}
            color={key.color}
            children={key.children}
            backgroundColor={key.backgroundColor}
          />
        ))}
      </div>
    </div>
  )
}

export default App
