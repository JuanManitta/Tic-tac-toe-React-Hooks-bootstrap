import { useState } from "react"
import { Board } from "./Board";
import { Squares } from "./Squares";

const initialState = (Array(9).fill(null))


export const TicTacToe = () => {

  const [square, setSquare] = useState(initialState);
  const [isX, setIsX] = useState(true)
  const [winner, setWinner] = useState('')
  const [scoreOfX, setScoreOfX] = useState(0)
  const [scoreOfO, setScoreOfO] = useState(0)

  const handleClick = (i) =>{
    if (square[i] === 'X' || square[i] === 'O') return;
    if (winner === 'X' || winner === 'O') return;

    
    square[i] = isX ? 'X' : 'O';
    setSquare(square)
    setIsX(!isX)
    handleWinner(square)
    
  }

  const handleWinner = (square) =>{
    const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for(let i = 0; i < winningPatterns.length; i++){
    const [ a, b, c ] = winningPatterns[i];
    if( square[a] && square[a] === square[b] && square[a] === square[c]){
      const newWinner = square[a];
      setWinner(newWinner)
      if( newWinner === 'X') {
        setScoreOfX(scoreOfX + 1)
      } else if (newWinner === 'O') setScoreOfO(scoreOfO + 1)  
    }; 
  };
};

  const handleReset = () =>{
    setSquare(Array(9).fill(null))
    setWinner('')
    setIsX(true)
  }
  const handleResetScore = () =>{
    setSquare(Array(9).fill(null))
    setWinner('')
    setIsX(true)
    setScoreOfO(0)
    setScoreOfX(0)
  }





  return (
      <>
        <h1>TIC-TAC-TOE</h1>
        <hr />
  <main className="d-flex">

      <div className="score" >
          <h2 className='mb-3'>Winner Player: <b>{winner}</b></h2>
          <hr />
          <h2>Player X: <b>{scoreOfX}</b> </h2>
          <h2>Player O: <b>{scoreOfO}</b> </h2>
      </div>

      <section className='board'>
        <Board
        handleClick={handleClick}
        handleReset={handleReset} 
        handleResetScore={handleResetScore} 
        square={square}
        winner={winner}
        scoreOfO={scoreOfO}
        scoreOfX={scoreOfX}/>
      
      <div className='d-flex mt-2'>
            <button 
            onClick={handleReset}
            className="btn_reset">
              <span>RESET</span>
            </button>
            <button 
            onClick={handleResetScore}
            className="btn_reset_score">
              <span>RESET SCORE</span>
            </button>
          </div>
      </section>
  </main>
   
    </>
  )
}



































  // const [square, setSquare] = useState(Array(9).fill(null));
  // const [isX, setIsX] = useState(true);
  // const [winner, setWinner] = useState('')
  // const [xscore, setXscore] = useState(0)
  // const [oscore, setOscore] = useState(0)


  // const handleClick = (i) =>{
  //   if( winner !== '' ){
  //     return
  //   } else {

  //     square[i] = isX ? 'X' : 'O'
  //     setIsX(!isX)
  //     setSquare(square)
  //     handleWinner(square)
  //   }
  // };
  
  // const handleWinner = (square) =>{
  //   const winningPatterns = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ]
  // for (let i = 0; i < winningPatterns.length; i++) {
  //   const [a, b, c] = winningPatterns[i]

  //    if(square[a]&& square[a] === square[b] && square[a] === square[c] ) {
  //     const newWinner = square[a]
  //     setWinner(newWinner)

  //     newWinner === 'X' ? addXscore() : addOscore();

  //    } else if (!square.includes(null)) setWinner('No One');

  //  }
  // };
  // const handleReset = () =>{
  //   setSquare(Array(9).fill(null));
  //   setWinner('')
  // };

  // const addXscore = () => {
  //   setXscore(xscore + 1)
  // }

  // const addOscore = () => {
  //   setOscore(oscore + 1)
  // }

  // const handleResetScore = () =>{
  //   setXscore(0)
  //   setOscore(0)
  //   handleReset()
  // }
