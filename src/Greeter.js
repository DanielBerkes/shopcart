import React from "react";

function Greeter({ name, age = 18, excitement = 1 }) {
  const greet = () => {
    alert(`Hello there, ${name}`);
  };
  const notify = () => {
    console.log(`Your age is ${age}`);
  };
  return (
    <>
      <h1>
        Hi there, {name} {"!".repeat(excitement)}
      </h1>
      <p>You are {age} old</p>
      <button onMouseOver={notify} onClick={greet}>
        {" "}
        Click Me
      </button>
    </>
  );
}

export default Greeter;
