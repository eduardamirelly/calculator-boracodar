import { Divide, Equals, Minus, Percent, Plus, PlusMinus, X } from 'phosphor-react';
import { useState } from 'react';
import { Key, KeyProps } from './components/Key';
import './global.css';

const keys: KeyProps[] = [
  {
    code: 'ce',
    children: '',
    keyName: 'CE',
    color: 'violet',
    backgroundColor: '1',
  },
  {
    code: 'c',
    children: '',
    keyName: 'C',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '%',
    children: <Percent size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '/',
    children: <Divide size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    code: '7',
    children: '',
    keyName: '7',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '8',
    children: '',
    keyName: '8',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '9',
    children: '',
    keyName: '9',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: 'x',
    children: <X size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    code: '4',
    children: '',
    keyName: '4',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '5',
    children: '',
    keyName: '5',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '6',
    children: '',
    keyName: '6',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '-',
    children: <Minus size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    code: '1',
    children: '',
    keyName: '1',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '2',
    children: '',
    keyName: '2',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '3',
    children: '',
    keyName: '3',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '+',
    children: <Plus size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    code: '+-',
    children: <PlusMinus size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '0',
    children: '',
    keyName: '0',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: ',',
    children: '',
    keyName: ',',
    color: 'white',
    backgroundColor: '1',
  },
  {
    code: '=',
    children: <Equals size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '3',
  },
]

function App() {
  const [result, setResult] = useState('...');
  const [operations, setOperations] = useState('...');

  const handleKeyClick = (keyCode: string) => {
    console.log(keyCode)
  }

  return (
    <div className="bg-calculator">
      <div className="head-calculator">
        <div className="head-calculator-operations">{operations}</div>
        <div className="head-calculator-result">
          <span>
            <Equals size={24} color="#6B6B6B" />
          </span>
          <span className="text-[2rem]">{result}</span>
        </div>
      </div>

      <div className="body-calculator">
        {keys.map((key, index) => (
          <Key
            key={index}
            code={key.code}
            keyName={key.keyName}
            color={key.color}
            children={key.children}
            backgroundColor={key.backgroundColor}
            onClick={() => handleKeyClick(key.code)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
