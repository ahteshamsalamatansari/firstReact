import React from 'react'

function Song() {
    const data = [
        {songName: 'Kamli',
         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae?'     
        },
        {songName: 'Maahi Ve',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, recusandae?'     
        }
    ];
    const handleClick = ()=>{alert('Gaana Nhi Hai Mere Paas')}
  return (
    <div className='w-full h-screen bg-zinc-400 flex flex-col gap-10 justify-center items-center'>
        {data.map((item, index) => (
            <div className='w-60 px-3 py-2 bg-zinc-100 rounded'>
            <h3 className='font-semibold text-xl'> {item.songName} </h3>
            <p className='text-xs mt-3'>{item.description}</p>
            <button onClick={handleClick} className='px-2 py-1 bg-green-500 text-xs rounded text-zinc-100 mt-4'>Download Now</button>
        </div>
        ))}
    </div>
  )
}

export default Song