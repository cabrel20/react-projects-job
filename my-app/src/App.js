
import React,{useState,useEffect,useCallback} from "react"
import NavButton from "./Components/NavButton";
import Card from "./Components/Card";
//import persons from "./Components/Datas";

const url="https://course-api.com/react-tabs-project";

function App() {
      
      let[people,setPeople]=useState([]);
      const [load,setLoad]=useState(true);
      const [table,setTable]=useState([]);
     const dataHandler=useCallback(async function(){
               
            const response= await fetch(url);
            const datas= await response.json();
            console.log(datas);
            setTable(datas);
            setPeople(datas);
            setLoad(false);
           },[]);

   useEffect(()=>{
    dataHandler()
   },[dataHandler]);
  const peopleHandler=(id1)=>{
      people=table;
    setPeople(
        people.filter((pers)=>pers.id===id1))  }
  return (
    <React.Fragment>
               <div>{
                load?<h1 className="text-5xl text-bold text-gray-600 text-center py-6">Loading...</h1>:<div>
                  <div className="flex flex-col items-center pt-12">
                <h1 className="text-4xl pb-4 text-gray-700 font-bold">Experience</h1>
                <div className="border-b-4 w-28 border-sky-400"></div>
              </div>
              <div className="flex flex-row justify-around items-start pt-16">
              <div className="flex flex-col items-start ml-20">{
                table.map((pers)=> <NavButton namePerson={pers.company} changeHandler={()=>peopleHandler(pers.id)}/>)
              }
              </div>
              <div>
                 <Card metier={people[0].title} name={people[0].company} date={people[0].dates} notes={people[0].duties}/>
              </div>
              </div>
              <div className="flex flex-col items-center">
                <button className="px-12 py-2 bg-sky-500 text-white rounded-md ">More info</button>
              </div>
                  </div>}</div>
                     
    </React.Fragment>
  );
}

export default App;
