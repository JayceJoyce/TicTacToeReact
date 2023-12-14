import SquareProps from "../../interface/Square.model";
import { useState } from "react";
export const numRows=[1,2,3];

export default function Square(props:SquareProps){

    return (
     <>
      {
        <button 
        key={props.id}
        className={`square ticToeCross ${props.id}`}
        onClick={props.onSquareClick}
        >
          {props.value}
        </button>
      }
     </>
    )
   }