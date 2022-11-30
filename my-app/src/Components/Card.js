import React from "react"
import {BiChevronsRight} from "react-icons/bi"

function Card({metier,name,date,notes}){
return(<React.Fragment>
    <div className="w-4/5 pl-20">
        <h1 className="text-3xl text-gray-600">{metier}</h1>
         <button className="text-md uppercase p-2 bg-slate-300 rounded-lg my-2 text-gray-500">{name}</button>
         <h2 className="text-md text-gray-500">{date}</h2>
         <div>{
            notes.map((note)=><div className="flex flex-row items-center py-4"><BiChevronsRight className="text-blue-600 pr-2" size={60}/><span className="text-gray-600">{note}</span></div>)
         }</div>

    </div>
</React.Fragment>)
}

export default Card