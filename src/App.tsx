import { Divide, Equals, Minus, Percent, Plus, PlusMinus, X } from 'phosphor-react';
import { Key, KeyProps } from './components/Key';
import './global.css';

const keys: KeyProps[] = [
  {
    children: '',
    keyName: 'CE',
    color: 'violet',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: 'C',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: <Percent size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: <Divide size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    children: '',
    keyName: '7',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: '8',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: '9',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: <X size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    children: '',
    keyName: '4',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: '5',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: '6',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: <Minus size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    children: '',
    keyName: '1',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: '2',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: '3',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: <Plus size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '2',
  },
  {
    children: <PlusMinus size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: '0',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: '',
    keyName: ',',
    color: 'white',
    backgroundColor: '1',
  },
  {
    children: <Equals size={28} />,
    keyName: '',
    color: 'white',
    backgroundColor: '3',
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
