
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [count , setCount] = useState(0);
  function incCount(){
    setCount(count+1)
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={incCount}>Click me</button>
    </div>
  )
}

export default App
