import * as React from "react";
import { useState } from "react";
import "../styles/styles.css";
import "../app.jsx";
function CoolInput({ Placeholder, Type }) {
  return <input type="text" className="coolinput" placeholder={Placeholder} />;
}
function Back() {
  return (
    <div className="back">
      <img
        className="icon"
        src="https://cdn.glitch.global/ffbc945f-5008-4f16-b2ba-4679ba0655a6/EF1C100B-11D1-40FC-92C5-D50D11AF7470.png?v=1682614610786"
      />
      <p className="backText">back</p>
    </div>
  );
}
function SelectBtn({ content, value, isSelected, click}) {
    
   
    return (
 <>
{ isSelected ? (

 <div className="selectbtn pop" onClick = {click}>{content}</div>
 
 ):(
   <div className="selectbtn" onClick = {click}>{content}</div>
    )}
   
      </>
      )
      }

function Size() {
let [choice, setChoice] = useState(0);
  
  
  return (
    <div className="selectbox">
      <SelectBtn
        content="a small village and some farmland"
        value="small"
