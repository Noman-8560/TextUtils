import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
     setText(event.target.value);
  }


  const [text ,setText] = useState('Enter a Text');
  return (
    <>
<div className='container'>
<h2>{props.heading}</h2>    
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button> 
</div>
<div className='container my-3'>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words, {text.length} characters</p>
  
</div>
</>

  )
}
