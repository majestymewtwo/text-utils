import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextArea mode={mode} />
    </>
  );
}

export default App;
