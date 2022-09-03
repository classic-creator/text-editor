import React, {useState}from 'react'

export default function TextForm(props) {

 
  
 
  const [text,setText]=useState('')

  const handleUpClick=()=>{
    // console.log("uppercase click" + text)
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showAlert('convert to upper case', 'success')

}
const handleLowClick=()=>{
  // console.log("uppercase click" + text)
  let newtext=text.toLowerCase();
  setText(newtext)
  props.showAlert('convert to lower case', 'success')}

  const handleExtraSpace=()=>{

    let newText=text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('remove extra space', 'success')
  }

  const handleFirstLtr=()=>{
  
  let result=text.toLowerCase().split(' ');
  let newtext=result.map(function(upper){
    return upper.replace(upper.charAt(0),upper.charAt(0).toUpperCase()) 
  })
  setText(newtext.join(" "))
  props.showAlert('convert to first latter uppercase case', 'success')
}
 
  const handleLineFirstLtr=()=>{
  
    let result=text.toLowerCase().split('. ');
    let newtext=result.map(function(upper){
      return upper.replace(upper.charAt(0),upper.charAt(0).toUpperCase()) 
    })
    setText(newtext.join(". "))
    props.showAlert('convert to first latter of a line to upper case', 'success')}

  const handleClearClick=()=>{
   let newtext=("")
    
    setText(newtext)
    props.showAlert('clear all text', 'success')}


  const handleOnChange=(event)=>{
    // console.log("on change");
    setText(event.target.value)
  }


  return (
  <>
  <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
  <div className=" container mb-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="14" ></textarea>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>
    {/* <button className="btn btn-primary mx-2" onClick={handlstyleClick}>{color}</button> */}
    <button className="btn btn-primary mx-2" onClick={handleFirstLtr}>first later capital</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>remove extra space</button>
    <button className="btn btn-primary mx-2" onClick={handleLineFirstLtr}>line 1stlater capital</button>
  </div>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>your text summery</h1>
    <p>{text.split(" ").length} words and {text.length} cheracters</p>
    <p> you need {0.008*text.split(" ").length} minut to read all text</p>
    <h1>preview</h1>
    <p>{text.length>0?text:'Entrt text in the box for preview'}</p>
  </div>
  </>
  )
}
