import React from "react";

const PlayButton = ({message,children,onPlay,onPause}) => {
    let playing=true;
    const handleClick=()=>{
        if(playing) onPlay();
        else onPause();
        playing=!playing
    }
  return (
    <div>
      <button
        className="bg-black text-white p-6 m-2 justify-center items-center text-center w-32 rounded-md shadow-lg hover:shadow-emerald-400"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

export default PlayButton;
