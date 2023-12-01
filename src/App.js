
import './App.css';
// importing the component to the parent app
import Color from '../src/Components/Color';
import { useState } from 'react';
//  this is the fucntion of the parent app
function App() {
  // data that holds key value pairs of an array of data 
  let data = [
    { color: "red", value: "#f00" },
    { color: "green", value: "#0f0" },
    { color: "blue", value: "#00f" },
    { color: "cyan", value: "#0ff" },
    { color: "magenta", value: "#f0f" },
    { color: "yellow", value: "#ff0" },
    { color: "black", value: "#000" },
  ];
   
//  usestate variable that is set to null 
  const [clickedIndex, setClickedIndex] = useState(null);

  // fucntion for the click that passes a parameter for the click function 
  function clickHandler(index) {
    console.log("clicked");
    // updating the usestate variable from null and passinf in the paramater from the fucntion 
    setClickedIndex(index);
    console.log(index, "index")
  }

 

  return (
    <div className="App">
  {/* passing the component of to the parent in jsx */}

  {/* setting props for the component so the child can acess the properties  */}
 {/* the props for the data so the child can access the data , the useState needs to be passeed to the child and the whole click fucntion needs to be passed to the child with a anoymous arrow fucntion which needs to have parameters to pass in  */}
        <Color  dataProp={data} onClickProps={(index) => clickHandler(index)} clickedIndexProps={clickedIndex} />
    
    </div>
  );
}

export default App;
