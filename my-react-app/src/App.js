import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false); // state will be initialize only once!
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App() running...");

  const toggleParagraphHandler = useCallback(() => {
    // console.log("allowToggle:", allowToggle);
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph /* false */} />
      <Button onClick={allowToggleHandler}>
        {allowToggle ? "Allow Toggling :D" : "Toggling not allowed D:"}
      </Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
