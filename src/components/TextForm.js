import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }
  const handleClClick = () => {
    const newText = ' ';
    setText(newText);
    props.showAlert("Clear the text!","success");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleExtraSpaces = () => {
   var newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Remove Extra Spaces!","success");
  }

  const handleOnChange = (event) =>{
     setText(event.target.value);
  }

  const [text ,setText] = useState('');
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
<h2>{props.heading}</h2>    
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#151D3B':'white' ,color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClClick}>Clear</button>
<button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>   
<button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>     
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.08 * text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Something in TextBox"}</p>
</div>
</>

  )
}
