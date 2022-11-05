import './style.css';
import {useState} from 'react'


function App() {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

const ops = ['/', '+', '*', '-', '0'];

const updateCalc = value => {
if (ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1))) {
  return;
  
}


  setCalc(calc+value);

  if (!ops.includes(value)) {
    setResult(eval(calc+value).toString());
  }
}
// {result ? <span>{result}</span> :'' }

const equalsTo = () => {
  setResult(eval(calc).toString());
  setCalc(" ")
}

const deleteButton = ()=> {
  if(calc == ''){
    return;
  }
  const value = calc.slice(0, -1);
  setCalc(value);
}

const clearDisplay = () => {
  setResult("");
  setCalc("");
}
return(
  
    <div className = "calc-grid">
      <div className = "output">
        <div className = "previous">{calc || "0"}</div>
        <div className = "current">{result}</div>
      </div>
     <button className = "long-btn" onClick={clearDisplay}>AC</button>
     <button onClick={deleteButton}>DEL</button>
     <button onClick={()=> updateCalc('+')}>+</button>
     <button onClick={()=> updateCalc('1')}>1</button>
     <button onClick={()=> updateCalc('2')}>2</button>
     <button onClick={()=> updateCalc('3')}>3</button>
     <button onClick={()=> updateCalc('-')}>-</button>
     <button onClick={()=> updateCalc('4')}>4</button>
     <button onClick={()=> updateCalc('5')}>5</button>
     <button onClick={()=> updateCalc('6')}>6</button>
     <button onClick={()=> updateCalc('*')}>*</button>
     <button onClick={()=> updateCalc('7')}>7</button>
     <button onClick={()=> updateCalc('8')}>8</button>
     <button onClick={()=> updateCalc('9')}>9</button>
     <button onClick={()=> updateCalc('/')}>/</button>
     <button onClick={()=> updateCalc('.')}>.</button>
     <button onClick={()=> updateCalc('0')}>0</button>
     <button className = "long-btn" onClick={equalsTo}>=</button>
    </div>

  
); 
}

export default App;
