import React, { useState } from "react";

const AddResme = () => {
  const [data, setData] = useState({
    game: "geography",
    expe: "microsoft",
    verified: true,
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data)
  }
  function handleChange(e) {
    console.log(e.target.value, e.target.name);
    setData({...data,
       [ e.target.value]: e.target.name
    })
    console.log(data)
  }
  return (
    <>
      <div className="flex flex-col">
        <form className="flex flex-col my-2 p-2 w-fit">
          <input
            name="name"
            onChange={handleChange}
            className="mb-2"
            type="text"
          />
          {data.name}
          <input name="extra" onChange={handleChange} type="text" />
          <button
            className="bg-black text-white p-2 m-2"
            onClick={handleSubmit}
            // onClick={() =>
            //   setData([
            //     ...Data,
            //     {
            //       id: Data.length + 1,
            //       name: "kumar",
            //       game: "geography",
            //       expe: "microsoft",
            //       extra: "basketball",
            //       verified: true,
            //     },
            //   ])
            // }
          >
            Add resume
          </button>
        </form>
      </div>
    </>
  );
};

export default AddResme;
