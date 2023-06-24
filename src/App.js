import './App.css';
import { useState } from "react";

function App() {
    // // function type 1
    // const message1 = function () {
    //     console.log("click 1 activated");
    //     let text1 = document.getElementById("messageText");
    //     text1.innerHTML = "click 1 activated";
    // }
    // // function type 2
    // const message2 = () => {
    //     console.log("click 2 activated")
    //     let text2 = document.getElementById("messageText");
    //     text2.innerHTML = "click 2 activated";
    // }
    // // function type 3
    // const message3 = () => {
    //     console.log("Click 3 activated");
    //     let text3 = document.getElementById("messageText");
    //     text3.innerHTML = "click 3 activated";
    // }

    const [number, setNum] = useState("*");
    const message1 = () => {
        setNum("1");
    }
    const message2 = () => {
        setNum("2");
    }
    const message3 = () => {
        setNum("3");
    }

  return (
      <div className="App">
          <header className="App-header">
              <h1>Hello React</h1>
          </header>
          <body className="App-body">
            <h1>Logo</h1>
            <p id="messageText">click {number} activated</p>
            <nav>
                <button onClick={message1}>Click 1</button>
                <button onClick={message2}>Click 2</button>
                <button onClick={message3}>Click 3</button>
            </nav>
          </body>
          <footer className="App-footer">
              <h4>Thank you</h4>
          </footer>
      </div>
  );
}

export default App;
