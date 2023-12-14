import { useState, useEffect } from "react"
import Square from "../../components/Square/Square"
import { numRows } from "../../components/Square/Square"
export default function Board(){
    const [square, setSquare] = useState(Array(9).fill(null))
    const [xFirst, setxFirst] = useState(true)
    const [isWinner, setisWinner] = useState(false)
    let numberofElement:number=0

let  alert=isWinner?`El ganador es ${xFirst?'O':'X'}`
    :`El siguiente jugador es: ${xFirst?'X':'O'}`;
    useEffect(() => {
      handleWinner()
   }, [square]);

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
          let [a,b,c]=e
       
          if((square[a]===square[b] && square[b]===square[c]) && square[a]!==null) setisWinner(true)
      })
  }  
    async function handleClick(key:number) {
        if(square[key] || isWinner) return;
        const nextSquares = square.slice();
       nextSquares[key] = xFirst? 'X': 'O';
        setxFirst(xFirst?false:true)
        setSquare(nextSquares);
    }

    return (
     <>
      <div className="status">{alert}</div>
      {
       numRows.map((el,key)=>{
         return(
           <div className="board-row" key={key}>
            {
                 numRows.map((e)=>{
                   let currentNum=numberofElement++;
                    return( 
                        <Square key={currentNum} id={currentNum} value={square[currentNum]} onSquareClick={()=>handleClick(currentNum)}></Square>
                    )
                 })
            }
           </div>
         )
       })
      }
     </>
    )
}