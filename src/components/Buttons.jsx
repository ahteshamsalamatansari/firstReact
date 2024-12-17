import React from 'react'

function button({values,handleClick, cardindex}) {
  const{name,profession,image,freinds} = values
  return (
    <div className='w-52 bg-white rounded overflow-hidden'>
      <div className='w-full h-36 bg-sky-200'>
        <img className='w-full h-full object-cover object-[20%_20%]' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={()=>handleClick(cardindex)} className={`mt-3 px-4 py-1 ${freinds ? "bg-green-600" : "bg-blue-600"} text-xs rounded-lg text-zinc-100 font-semibold`}>
          {freinds ? "Freinds" : "Add Freind"}
        </button>
      </div>

    </div>
  )
}

export default button