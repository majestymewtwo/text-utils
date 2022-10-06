import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleVoice = () => {
    const synth = window.speechSynthesis;
    let ourText = text;
    const utterThis = new SpeechSynthesisUtterance(ourText);

    synth.speak(utterThis);
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`my-0 px-5 text-center bg-${props.mode} text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h2>Utiltites for text</h2>
        <div class="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your text :
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Text goes here"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#423F3E" : "#F7F5F2",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <div className="my-4 d-flex flex-column col-8 mx-auto flex-lg-row col-lg-10">
            {/* Button 1 */}
            <button
              type="button"
              class={`btn btn-outline-${
                props.mode === "dark" ? "light" : "dark"
              } m-4`}
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            {/* Button 2 */}
            <button
              type="button"
              class={`btn btn-outline-${
                props.mode === "dark" ? "light" : "dark"
              } m-4`}
              onClick={handleClear}
            >
              Clear text
            </button>
            {/* Button 3 */}
            <button
              type="button"
              class={`btn btn-outline-${
                props.mode === "dark" ? "light" : "dark"
              } m-4`}
              onClick={handleVoice}
            >
              Read Text
            </button>
            {/* Button 4 */}
            <button
              type="button"
              class={`btn btn-outline-${
                props.mode === "dark" ? "light" : "dark"
              } m-4`}
              onClick={handleLoClick}
            >
              Convert to Lowercase
            </button>
            {/* Button 5 */}
            <button
              type="button"
              class={`btn btn-outline-${
                props.mode === "dark" ? "light" : "dark"
              } m-4`}
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            {/*Button 6*/}
            <button
              type="button"
              class={`btn btn-outline-${
                props.mode === "dark" ? "light" : "dark"
              } m-4`}
              onClick={downloadTxtFile}
            >
              Download as Text File
            </button>
          </div>
        </div>

        <hr className="col-10 mx-auto" />

        <h4>Text Summary</h4>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <hr className="col-10 mx-auto" />

        <h3>Preview</h3>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {text}
        </p>
      </div>
    </>
  );
}
