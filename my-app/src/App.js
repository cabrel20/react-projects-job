
import React,{useState} from "react"
import NavButton from "./Components/NavButton";
import Card from "./Components/Card";
import persons from "./Components/Datas";


function App() {
  let[people,setPeople]=useState(persons);
  const peopleHandler=(id1)=>{
      people=persons;
    setPeople(
        people.filter((pers)=>pers.id===id1))  }
  return (
    <React.Fragment>
          <div className="flex flex-col items-center pt-12">
            <h1 className="text-4xl pb-4 text-gray-700 font-bold">Experience</h1>
            <div className="border-b-4 w-28 border-sky-400"></div>
          </div>
          <div className="flex flex-row justify-around items-start pt-16">
          <div className="flex flex-col items-start ml-20">{
            persons.map((pers)=> <NavButton namePerson={pers.name} changeHandler={()=>peopleHandler(pers.id)}/>)
          }
          </div>
          <div>
             <Card metier={people[0].metier} name={people[0].name} date={people[0].date} notes={people[0].notes}/>
          </div>
          </div>
          <div className="flex flex-col items-center">
            <button className="px-12 py-2 bg-sky-500 text-white rounded-md ">More info</button>
          </div>
    </React.Fragment>
  );
}

export default App;
