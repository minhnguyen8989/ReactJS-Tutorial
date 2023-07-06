import './App.css';
import {useEffect, useState} from "react";
import CarList from './CarList';

function App() {
    // Click Event Exercise

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
    //

    // Click Event Exercise with useState
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

    //Object Output Exercise with useState
    const [cars, setCars] = useState([
        {year: "2012", make: "Toyota", color: "White", id: 1},
        {year: "2020", make: "Honda", color: "Black", id: 2},
        {year: "2021", make: "Mazda", color: "Blue", id: 3},
        {year: "2012", make: "Kia", color: "Grey", id: 4},
        {year: "2023", make: "Honda", color: "White", id: 5},
        {year: "2019", make: "Honda", color: "Blue", id: 6}
    ]);

    //Delete button function in CarList.js
    const handleDelete = (id) => {
        const newCars = cars.filter(car => car.id !== id);
        setCars(newCars);
    }

    // Working with useEffect and fetch Json
    useEffect( () => {
        console.log("effect ran");
        console.log(cars);
        }, []
    );


  return (
      <div className="App">
          <header className="App-header">
              <h1>Hello React</h1>
          </header>
          <body className="App-body">
          {/*Click Event Exercise*/}
          <div className="clickEventExercise">
              <h1>Click Event Exercise</h1>
              <p id="messageText">click {number} activated</p>
              <nav>
                  <button onClick={message1}>Click 1</button>
                  <button onClick={message2}>Click 2</button>
                  <button onClick={message3}>Click 3</button>
              </nav>
          </div>
          <hr/>
          {/*Working with props Carlist.js*/}
          <CarList cars={cars} title="Object Output Exercise" handleDelete={handleDelete} />
          <CarList cars={cars.filter((car) => car.make === "Honda")} title="Working with .filter (Honda)"  handleDelete={handleDelete} />

          </body>
      </div>
  );
}

export default App;
