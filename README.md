# useEffect reacthook with dependencies


![counter reset](./public/counterWReset.gif)

```js
function App() {
  const [counter, setCounter] = useState(77);
  const [name, setName] = useState("");
  const [nameToggle, setFemName] = useState(true);

  useEffect(() => {
    // since counter is only dependency for useEffect: useEffect will be called when counter changes - this is how we use useEffect Dependency Array
    console.log('useEffect: Lee Seung Chul!')
  }, [counter]);

```
