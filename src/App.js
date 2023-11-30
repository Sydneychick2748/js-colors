
import './App.css';
import Color from '../src/Components/Color';
import { useState } from 'react';

function App() {
  let data = [
    { color: "red", value: "#f00" },
    { color: "green", value: "#0f0" },
    { color: "blue", value: "#00f" },
    { color: "cyan", value: "#0ff" },
    { color: "magenta", value: "#f0f" },
    { color: "yellow", value: "#ff0" },
    { color: "black", value: "#000" },
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  function clickHandler(index) {
    console.log("clicked");
    setClickedIndex(index);
    console.log(index, "index")
  }

 

  return (
    <div className="App">
  
        <Color  dataProp={data} onClickProps={(index) => clickHandler(index)} clickedIndexProps={clickedIndex} />
    
    </div>
  );
}

export default App;
