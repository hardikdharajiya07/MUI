//  Write a program which reads a value of an input text without controlled component (i.e. using useref).

import { useRef } from "react";

const ControlledComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
   console.log(inputRef.current.value);
   
 
  };

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={handleClick}>Read Value</button>    
      </>
  );
};

export default ControlledComponent;