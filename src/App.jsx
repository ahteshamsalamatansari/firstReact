import React, { useState } from "react";
import Card from "./components/Card";
import Song from "./components/Song";
import Ccard from "./components/Ccard";
import Buttons from "./components/Buttons";
import myimage from "./assets/img/kanchan.jpg"
function app(){
  const data =[
    {name: "Malishka", profession: "Teacher", image:"https://images.pexels.com/photos/27155545/pexels-photo-27155545/free-photo-of-brunette-woman-sitting-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", freinds:false},
    {name: "Kanchan", profession: "Software Engineer", image:myimage, freinds:false },
    {name: "Nandani", profession: "Doctor", image:"https://images.pexels.com/photos/27155550/pexels-photo-27155550/free-photo-of-smiling-bride-in-traditional-wedding-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", freinds:false },
    {name: "Mansi", profession: "Professor", image:"https://img.freepik.com/free-photo/beautiful-woman-near-fireplace-looking-front_114579-85106.jpg?t=st=1734449659~exp=1734453259~hmac=5ac4ebcc68244d0ffba314a6783b82b2f46e32e9bfac1d50424d9b66459b3c3e&w=360", freinds:false },
  ];
  const[realdata, setRealdata] = useState(data);
  const handleFreindButton = (cardindex)=>{
     setRealdata((prev) => {
      return prev.map((item, index) => {
        if(index === cardindex){
          return {...item, freinds: !item.freinds}
        }
        return item;
      })}
  )} 
  return(
    <>
      <div className="w-full h-screen bg-zinc-400 flex gap-3 items-center justify-center">
      {realdata.map((item, index)=>(
        <Buttons key={index} cardindex={index} values={item} handleClick={handleFreindButton} />
      ))}
      </div>
    </>
  )
}
export default app