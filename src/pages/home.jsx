import * as React from "react";
import "../styles/styles.css";
function CoolBtn({content, disabled, route}){
  
  if (disabled) {
    return <button className="coolshape homebtn disabled">{content}</button>
  } else {
    return <button ClassName= "coolshape homebtn">{content}</button>
  }
}
function MenuBox(){
  return (
    <div className="menubox">
 <CoolBtn content = "new island" disabled = {true} />
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
      src= "https://cdn.glitch.global/ffbc945f-5008-4f16-b2ba-4679ba0655a6/35D6CCCD-4699-48A4-B449-2607783D056C.png?v=1682612634645"
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
