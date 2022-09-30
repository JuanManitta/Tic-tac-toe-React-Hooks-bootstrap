
export const Squares = ({square, onClick}) => {

    
  return (
    <button
    onClick={onClick}
    className='square '>
        <h5 className='center_text'>
            <span>{square}</span>
        </h5>
    </button>
  )
}
