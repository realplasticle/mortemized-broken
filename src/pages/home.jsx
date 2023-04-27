import * as React from "react";
import "../styles/styles.css";
function CoolBtn({content, disabled, route}){
  
  if (disabled) {
    return <button className="coolbtn disabled">{content}</button>
  } else {
    return <button ClassName= "coolbtn">{content}</button>
  }
}
function MenuBox(){
  return (
    <>
 <CoolBtn content = "new island" disabled = {true} />
<CoolBtn  content = "load island" disabled = {true}/>
<CoolBtn content = "import island" disabled = {true}/>
    </>
  );
}
function TitleBox(){
  return (
  <div className="titlebox">
    <img 
      className="titleimg"
      src= "https://cdn.glitch.global/bf7de285-8738-4504-9358-6f1c68ee7254/2023_04_26_0ka_Kleki.png?v=1682533627908"
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
