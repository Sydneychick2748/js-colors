import { useState } from "react";
// this is the function for the color component and it has props passed in from app
function Color(props) {

 

 console.log(props, "props")
  return (
    <>
    {/* the map is looping threw the data which we passed in from props and is mapping threw each object in the data array and the key for each data object  */}
   {props.dataProp.map((data, i) => {
        return (
          <div
        //   the key for the loop for js is important 
            key={i}
            // the onclick on the div is passed as a anonamysoe fucntion so it dose not fire the fucntion call before the item is clicked and a parameter is passed in the fucntion so it knows were the click is in the data
            // onClick={()=>props.onClickProps(i)}
            // the style tag is in line and it is a ternary passing in the props of the original usestate and finding out if it is truly the index in the map is clicked then to change the color passing in the props in the data to access the information 
            style={{
                color: props.clickedIndexProps === i ? data.value : "black",
                
              }}
          >
            {/* this is a paragraph that dispalys in the jsx and it is grabbing the props in the array of data from the parent  */}
            <p>{data.color}</p>
            <p>{data.value}</p>
          </div>
        );
      })}
    </>
  );
}

export default Color;
