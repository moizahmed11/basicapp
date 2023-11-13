import {React, useState} from 'react'; 
import './App.css';
import Button from "react-bootstrap/Button";
 
function App() {
  
  // let counter = 15 
  // const addValue = () => {
  //     counter = counter + 1; 
  //     console.log(counter);
  // }

  const [counter, setCounter] = useState(1)

   const addValue = () => {
        setCounter(counter + 1)
   }
 
   const subValue = () => {
    setCounter(counter - 1)
   }

  return (  
    <>  
      <header className="App-header"> 
      <Button onClick={addValue}>Add Value</Button>
      <Button onClick={subValue}>Remove</Button>
        <p>{counter} Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           
        </a>
      </header>
    </>
  );
}

export default App;
