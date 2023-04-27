import * as React from "react";
import "../styles/styles.css";
function CoolBtn({content, disabled, route}){
  
  if (disabled) {
    return <button className="coolbtn disabled">{content}</button>
  } else {
    return <button className= "coolbtn ">{content}</button>
  }
}
function MenuBox(){
  return (
    <div className="menubox">
 <CoolBtn content = "new island" disabled = {false} />
<CoolBtn  content = "load island" disabled = {true}/>
<CoolBtn content = "import island" disabled = {true}/>
    </div>
  );
}
function TitleBox(){
  return (
  <div className="titlebox">
    <img 
      className="titleimg"
      src= "https://cdn.glitch.global/ffbc945f-5008-4f16-b2ba-4679ba0655a6/EF1C100B-11D1-40FC-92C5-D50D11AF7470.png?v=1682614610786"
      />
      <h1 className="title">mortemized!</h1>
    
    </div>
  )
}
function  Menu(){
  return (
    <div className = "menu">
      <TitleBox />
      <MenuBox />
    </div>
  )
}


export default function Home() {
  

  return (
  <Menu />
  );
}
