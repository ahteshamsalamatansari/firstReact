import React, { useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
function Ccard() {
    const[val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 h-32 bg-zinc-500 relative rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 transition-all duration-1000 ease-in-out ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://plus.unsplash.com/premium_photo-1687186953637-78a495aec485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBob3QlMjBmZW1hbGV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-all duration-1000 ease-in-out ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBob3QlMjBmZW1hbGV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <span onClick={()=>setVal(()=>!val)} className="w-10 h-10 flex justify-center items-center bottom-[0%] absolute  left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <FaCircleArrowRight />
        </span>
      </div>
    </div>
  );
}

export default Ccard;
