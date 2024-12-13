import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1536565206219-37a3cf48b2d3?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, eum alias?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543257213-425133a93f06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Products",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, eum alias?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515744981888-3b1dede3fc58?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Keyboards",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, eum alias?",
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10">
      {data.map((elem, index) => (
        <div key={index} className="w-52 px-3 py-4 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold"> {elem.name} </h2>
            <p className="text-xs mt-5">
              {elem.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
