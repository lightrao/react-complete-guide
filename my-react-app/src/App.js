import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  console.log("App() running...");
  const [showParagraph, setShowParagraph] = useState(false); // state will be initialize only once!
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    // console.log("allowToggle:", allowToggle);
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph); // schedules a state update
    }
  }, [allowToggle]);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle((prev) => !prev); // schedules a state update, batch more than one state updates together
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph /* false */} />
      <Button onClick={allowToggleHandler} btnName="Allow Toggle Btn">
        Switch Allow Toggle :)
      </Button>
      <Button onClick={toggleParagraphHandler} btnName="Toggle Paragraph Btn">
        Toggle Paragraph!
      </Button>
    </div>
  );
}

export default App;
