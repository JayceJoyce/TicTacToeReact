import SquareProps from "../../interface/Square.model";
import { useState } from "react";
export const numRows=[1,2,3];

export default function Square(props:SquareProps){

    return (
     <>
      {
        <button 
        className="square ticToeCross"
        onClick={props.onSquareClick}
        >
          {props.value}
        </button>
      }
     </>
    )
   }