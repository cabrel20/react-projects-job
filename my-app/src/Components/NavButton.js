import React,{useState} from "react"

function NavButton({namePerson,changeHandler,id}){
      const [onTouch,setOnTouch]=useState(false);
      const touchHandlerOn=()=>{
            setOnTouch(true);
      }
      const touchHandlerOff=()=>{
            setOnTouch(false);  
      }
   return(<React.Fragment>
         <button onClick={changeHandler} onMouseOut={touchHandlerOff} onMouseEnter={touchHandlerOn} className={`ml-2 my-1 uppercase  p-2  duration-200  ${onTouch?"text-sky-400 border-l-4 border-sky-400":"text-gray-700"}`}>{namePerson}</button>
   </React.Fragment>)
 }
 export default NavButton