import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(77);
  const [name, setName] = useState("");
  const [nameToggle, setFemName] = useState(true);

  useEffect(() => {
    console.log('useEffect: Lee Moon say!')
  }, []);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);
  const handleChangeNameClick = () => setName(name.length === 0 ? "Lee Moon Sae" : "Yoon Jong Sin");
  const handleClearNameClick = () => setName("");
  const handleToggleNameClick = () => setFemName(!nameToggle);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button> | <button onClick={handleDecrement}>-</button>
      <hr />
      <button onClick={handleReset}>Reset</button>
      
      <h2>Next super star! {name}</h2>
      <button onClick={handleChangeNameClick}>New Name</button>
      <button onClick={handleClearNameClick}>Reset Name</button>

      <h3>{nameToggle ? "Lee So Ra" : "Park Chae Rin"}</h3>
      <button onClick={handleToggleNameClick}>Toggle Female Name</button>
    </div>
  );
}

export default App;
