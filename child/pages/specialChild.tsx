import React, { useState } from "react";

function SpecialChild() {
  const [text, setText] = useState("");

  function handleClick() {
    setText("I am special child");
  }
  return (
    <>
      <div> I am Special Child</div>
      <button onClick={handleClick}>Click Me</button>
      <div>{text}</div>
    </>
  );
}

export default SpecialChild;
