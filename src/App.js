import React, {useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(77);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default App;