"use client";
import { useState } from "react";

function Client() {
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("yash");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black space-y-2">
      <h2 className="text-xl text-neutral-400">Client Page</h2>
      <h2 className="text-xl text-neutral-400">{text}</h2>
      <button
        className="bg-blue-500 p-2 rounded-md"
        title="name"
        type="button"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default Client;
