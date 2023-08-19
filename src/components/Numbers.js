import React, { useState } from 'react';

const Numbers = () => {
    const [results, setesults] = useState(0);
    const [colors, setcolors] = useState("one");
    
    const postive = () =>  setesults(results+1)
    const negative = () =>  { 
      if(results > 0)
      {
        setesults(results-1); 
      }
    }
    const color = () =>  
    {
      // setcolors(colors,"primary")
      // console.log("colors", colors) 
      setcolors (colors === "one" ? "blue" : "no-active")
    }
  return (
    <div>
        <button variant='secondary' className='col-3' onClick={() => postive()}>+</button>
        <div></div> 
        <button variant='secondary' className='col-3' onClick={() => negative()}>-</button>  
        <h3>{results}</h3>  
        <button variant='secondary' className={`${colors} my-btn`}  onClick={() => color()}>Color</button>  

    </div>
  )
}

export default Numbers


