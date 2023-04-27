import * as React from "react";
function CoolBtn(props){
  let content = props.content;
  let disabled = props.disabled;
  let route = props.route;
  
  if (disabled) {
    return <button className="coolbtn disabled">{content}</button>
  } else {
    return <button ClassName= "coolbtn">{content}</button>
  }
}
function MenuBox(){
  return (
 <CoolBtn content = "new island" />
<CoolBtn  content = "load island"/>
<CoolBtn content = "import island"/>
  );
}
function TitleBox(){}
function  Menu(){
  
}


export default function Home() {
  

  return (
    <>
      
    </>
  );
}
