import { useState } from "react"
import Square from "../../components/Square/Square"
import { numRows } from "../../components/Square/Square"
export default function Board(){
    const [square, setSquare] = useState(Array(9).fill(null))
    const [xFirst, setxFirst] = useState(true)
    let winner:string=''
    let numberofElement:number=0

    function handleClick(key:number) {
        if(square[key]) return;
        const nextSquares = square.slice();
       nextSquares[key] = xFirst? 'X': 'O';
        setxFirst(xFirst?false:true)
        setSquare(nextSquares);
    }

    return (
     <>
      {
       numRows.map((el)=>{
         return(
           <div className="board-row">
            {
                 numRows.map((e)=>{
                   let currentNum=numberofElement++;
                    return( 
                        <Square key={currentNum} value={square[currentNum]} onSquareClick={()=>handleClick(currentNum)}></Square>
                    )
                 })
            }
           </div>
         )
       })
      }
     </>
    )
    const handleWinner=()=>{
        const winnerLineMatches = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
          winnerLineMatches.forEach((e)=>{
            winner=    square[e[0]]==square[e[1]] && square[e[1]]==square[e[2]]
            ?`El ganador es ${square[e[0]]}`
            :``;
        })
    }   
}