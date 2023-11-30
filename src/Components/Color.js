import { useState } from "react";

function Color(props) {

 

 console.log(props, "props")
  return (
    <>
   {props.dataProp.map((data, i) => {
        return (
          <div
            key={i}
            onClick={()=>props.onClickProps(i)}
            style={{
                color: props.clickedIndexProps === i ? data.value : "black",
                
              }}
          >
            <p>{data.color}</p>
            <p>{data.value}</p>
          </div>
        );
      })}
    </>
  );
}

export default Color;
