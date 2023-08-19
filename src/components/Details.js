import React, { useState } from "react";
import { textarea } from 'react-bootstrap';

const Details = () => {
    const [text , setText] = useState("Enter the name");

    const handleInput = (event) => {
        setText(event.target.value);
    }
    return(
        <>
        <div className="container">
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleInput} id= "mybox" rows = "5"> </textarea>
            <p>Length {text.length - (text.split(" ").length - 1)}</p>
            <p>words {text.split(" ").length - 1}</p>
            </div>
      </div>
      </>
    )
}

export default Details