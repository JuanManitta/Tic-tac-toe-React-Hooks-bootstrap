import { Squares } from './Squares'
export const Board = (props) => {

  const 
  {square,
  handleClick,
  winner,
  scoreOfX,
  scoreOfO,
  handleReset,
  handleResetScore,
  } = props
  
  return (
    <>
      <div className='board_row'>
        <Squares
        square={square[0]} onClick={() => handleClick(0)} /> 
        <Squares
        square={square[1]} onClick={() => handleClick(1)} /> 
        <Squares
        square={square[2]} onClick={() => handleClick(2)} /> 
      </div>
      <div className='board_row'>
        <Squares
        square={square[3]} onClick={() => handleClick(3)} /> 
        <Squares
        square={square[4]} onClick={() => handleClick(4)} /> 
        <Squares
        square={square[5]} onClick={() => handleClick(5)} /> 
      </div>
      <div className='board_row'>
        <Squares
        square={square[6]} onClick={() => handleClick(6)} /> 
        <Squares
        square={square[7]} onClick={() => handleClick(7)} /> 
        <Squares
        square={square[8]} onClick={() => handleClick(8)} /> 
      </div>
     
    </>
         )
}
