import { useState } from "react";
import Counter from "./components/Counter";
import PlayButton from "./components/PlayButton";
import Resume from "./components/Resume";
import data from './data.js/data.js'
import AddResme from "./components/AddResme";



function App() {
  const [Data,setData]=useState(data)
  return (
    <>
     
      
    <AddResme setData={setData}/>
     <h1 className='text-6xl font-bold'>Resume</h1>

        {
          data.map(dataa=>
            <Resume key={dataa.id} name={dataa.name} game={dataa.game} expe={dataa.expe} extra={dataa.extra} />,
            // <PlayButton  message="play-btn" onPlay={()=>console.log("play")} onPause={()=>console.log("pause")} >Play</PlayButton>
            )
        }
        {/* <PlayButton  message="pause-btn" onSmash={()=>alert("Message")}>pause</PlayButton> */}
    
        {/* <Counter/> */}
    
    </>
    
  );
}

export default App;
