import React, { useState } from "react";

export default function DisplayScreen({ imagess, images3 }) {
  const [inputValue, setInputValue] = useState("");
  const [divList, setDivList] = useState([]);

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleClick = () => {
    if (inputValue.trim()) {
      setDivList((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) =>
    setDivList(divList.filter((_, i) => i !== index));

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-black"
      style={{
        backgroundImage: `url(${imagess})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-3/5 w-3/12  rounded-lg flex flex-col justify-start overflow-y-auto max-h-[80%] p-5"
        style={{
          backgroundImage: `url(${images3})`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center mb-4 ">
          <input
            className="h-14 w-3/4 rounded-lg pl-2 "
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter text"
          />
          <button
            onClick={handleClick}
            className="ml-2 h-14 w-1/4 hover:bg-sky-700 bg-blue-500 text-white rounded-lg p-2"
            disabled={!inputValue.trim()}
          >
            ✔️
          </button>
        </div>

        <div className="overflow-y-auto scroll-smooth">
          {divList.map((div, index) => (
            <div
              key={index}
              className="bg-white p-4 mt-2 rounded-lg  flex justify-between"
            >
              <p>{div}</p>
              <button
                className="bg-indigo-400 rounded-lg w-24 h-11"
                onClick={() => handleDelete(index)}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
