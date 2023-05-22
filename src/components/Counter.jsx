import React, { useState } from 'react'



const Counter = () => {
    
    const [number,setNumber]=useState(0);
    function handleClick(e){
        e.stopPropagation();
        setTimeout(() => {
            
            setNumber(number=>number+1);
        }, 2000);
         console.log(number)
     }
  return (
    <>
      <h1 className='text-4xl'>{number}</h1>
      <button className='bg-black text-white p-4 m-2 text-6xl' onClick={handleClick}>Submit</button>
    </>
  )
}

export default Counter
