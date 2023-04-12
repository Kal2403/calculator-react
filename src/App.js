import './App.css';
import FreeCodeCampLogo from './img/FreeCodeCamp_logo.svg.png'
import Button from './component/Button'
import Screen from './component/Screen'
import ButtonClear from './component/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculatorResult = () => {
    if(input){
      setInput(evaluate(input));
    }
    
  };

  return (
    <div className="App">
      <div className='container-logo'>
        <img
          src={FreeCodeCampLogo}
          className='logo'
          alt='Logo FreeCodeCamp' />
      </div>
      <div className='container-calculator'>
        <Screen input={ input } />

        <div className='fila'>
          <Button handlerClick={addInput} >1</Button>
          <Button handlerClick={addInput} >2</Button>
          <Button handlerClick={addInput} >3</Button>
          <Button handlerClick={addInput} >+</Button>
        </div>
        <div className='fila'>
          <Button handlerClick={addInput} >4</Button>
          <Button handlerClick={addInput} >5</Button>
          <Button handlerClick={addInput} >6</Button>
          <Button handlerClick={addInput} >-</Button>
        </div>
        <div className='fila'>
          <Button handlerClick={addInput} >7</Button>
          <Button handlerClick={addInput} >8</Button>
          <Button handlerClick={addInput} >9</Button>
          <Button handlerClick={addInput} >*</Button>
        </div>
        <div className='fila'>
          <Button handlerClick={calculatorResult} >=</Button>
          <Button handlerClick={addInput} >0</Button>
          <Button handlerClick={addInput} >.</Button>
          <Button handlerClick={addInput} >/</Button>
        </div>
        <div className='fila'>
          <ButtonClear handlerClear={() => setInput('')} >
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
