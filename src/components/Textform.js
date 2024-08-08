import React, {useState} from 'react';



export default function Textform(props) {
const handleUpClick= ()=>{
    // console.log("Upparcase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
}

const handleloClick= ()=>{
    // console.log("Upparcase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
}

const handleClearClick= ()=>{
    // console.log("Upparcase was clicked" + text);
    let newText = "";
    setText(newText);
}

const handleOnChange= (event)=>{
    // console.log("On change");
     setText(event.target.value);
}

 const [text, setText] = useState('Enter Text here');
// setText("New text Way");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}  id="myBox" rows="8"></textarea>
 </div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to upparcase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick} >Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container">
        <h1>Your Txt Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Charactor</p>
        <p>{3 * text.split(" ").length} Seconds Read</p>
        <h3>Preveiw</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
