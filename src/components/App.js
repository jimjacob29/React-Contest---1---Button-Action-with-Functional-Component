import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button
        id="click"
        onClick={() =>
          setText(
            `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
          )
        }
      >
        click
      </button>
      {text ? <p id="para">{text}</p> : null}
    </div>
  );
}

export default App;
