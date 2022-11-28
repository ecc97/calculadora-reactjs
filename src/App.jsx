import {useState} from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setresult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)){
      setresult(eval(calc + value).toString());
    }
  }
  const createDigits = () => {
    const digits = [];

    for(let i = 1; i<10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      )
    }
    return digits;
  } 
  const calculate = () => {
    setCalc (eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == ''){
      return;
    }

    const value = calc.slice(0,-1);
    setCalc(value);
  }
  const hide = () =>{
    var spanResult = document.querySelector('span');
      spanResult.style.display = 'none';
  }
  const show = () =>{
    var showResult = document.querySelector('span');
      showResult.style.display = 'inline-block';
  }
  return (
    <div className='App'>
      <h1>Calculadora React Js</h1>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ''}
          &nbsp;
          {calc || "0"}
        </div>
        <div className='operators'>
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>

        <button onClick={deleteLast}>Borrar</button>
        </div>
        <div className='digits'>
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          
          <button onClick={calculate}>=</button>
        </div>
      </div>
      <button id="hide" onClick={hide}>Ocultar filtro de resultado</button>
      <button id="show" onClick={show}>Mostrar filtro de resultado</button>
    </div>
  );
}
export default App;