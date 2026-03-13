 import { Button } from "@mui/material";
import { useRef } from "react";

const FocusesInputText = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <Button className="focus-button border border-primary" onClick={focusInput}>Focus Input</Button>
    </div>
  );
};

export default FocusesInputText;