import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Calculator12() {

    const[display, setDisplay] = useState('');
    const[operator, setOperator] = useState('+');
    const[preOperator, setPreOperator] = useState('+');
    const[result, setResult] = useState(0);
    const[flag, setFlag] = useState(false);
    const handleNumberClick = (num) => {
    setDisplay(parseInt(display + num));
    };

    const handleOperatorClick = (oper) => {
    if(result !== 0)  setFlag(true);
    calculateResult(oper);
    };

  const calculateResult =  (operation) => {
    let answer;
    switch(preOperator) {
        case '+':
            answer = result + display;
            break;  
        case '-':
            answer = result - display;
            break;
        case '*':
            answer = result * display;
            break;
        case '/':
            answer = result / display;
            break;
        case '%':
            answer = result % display;
            break;        
        default:
            break;                 
    }
    setResult(answer);
    setPreOperator(operation);
    setDisplay(0);
    
    console.log("answer",answer)
  };

  const calculateequal =  () => {
    if(result !== 0)  setFlag(true);
    let answer;
    switch(preOperator) {
        case '+':
            answer = result + display;
            break;  
        case '-':
            answer = result - display;
            break;
        case '*':
            answer = result * display;
            break;
        case '/':
            answer = result / display;
            break;
        case '%':
            answer = result % display;
            break;        
        default:
            break;                 
    }
    setResult(answer);
    setPreOperator('+');
    setDisplay(0);
  };

  console.log("display",display)
  console.log("operator",operator)
  console.log("result", result)

  const handleClear = () => {
    setResult(0);
    setOperator('+');
    setPreOperator('+')
    setDisplay('');
    setFlag(false);
  };

  const handleDeleteNum = () => setDisplay(0);

  const handleInputChange = (event) => {
    setDisplay(parseInt(event.target.value));
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div style={{background:'#f1f1f1',padding:'3rem', marginInline:'10rem',borderRadius:'3rem'}}>
        <div className="head text-center text-success">
          <h2>Simple Calculator</h2>  
        </div>
        
        <div className="row calculator mt-5 mb-5"  >
        <input type="text" value={display} onChange={handleInputChange}/>
          <div className="fst_row col-12 mt-2 d-flex gap-1">
            <Button variant='secondary' className='col-3' onClick={() => handleClear()}>AC</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleDeleteNum()}>C</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleOperatorClick('%')}>%</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleOperatorClick('/')}>/</Button>  
          </div>
          <div className="scnd_row col-12 mt-2 d-flex gap-1">
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('7')}>7</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('8')}>8</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('9')}>9</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleOperatorClick('*')}>*</Button>  
          </div>
          <div className="thrd_row col-12 mt-2 d-flex gap-1">
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('4')}>4</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('5')}>5</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('6')}>6</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleOperatorClick('-')}>-</Button>  
          </div>
          <div className="frth_row col-12 mt-2 d-flex gap-1">
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('1')}>1</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('2')}>2</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('3')}>3</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleOperatorClick('+')}>+</Button>  
          </div>
          <div className="ffth_row col-12 mt-2 d-flex gap-1">
            <Button variant='secondary' className='col-6' onClick={() => handleNumberClick('0')}>0</Button>  
            <Button variant='secondary' className='col-3' onClick={() => handleNumberClick('.')}>.</Button>  
            <Button variant='secondary' className='col-3' onClick={() => calculateequal()}>=</Button>    
          </div> 
        </div>
        {
            result && (
                <div>
                  <h3>Result: {flag ? result : 0}</h3>  
                </div>
            )
        }
        </div>
      </div>
    </>
  )
}
