import React from 'react'

const Resume = ({name,game,expe,extra,verified,children}) => {
  
   
  
   
   
   
  return (
     < >
       
     <h1 className='mt-2 text-4xl '>Name: {name} </h1>
     <div></div>
     <p className='text-3xl'>Interest</p>
     <ul>
        <li>{game}</li>
        
     </ul>
     <ul>
    <p className='text-3xl'>Experience {verified && '✅'} </p> 
    <li>{expe}</li>
    
   </ul>
     <p className='text-3xl'>Extra curicular</p>
     <ul>
      <li>{extra}</li>
      
     </ul>
     {children}
    </>
  )
}

export default Resume
