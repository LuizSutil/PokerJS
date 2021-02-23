const Card = ({carta,color,onClick}) => {

    
    return (
        <button
        style={{backgroundColor: color = carta.selected && 'red'}}
        onClick = {() => onClick(carta.id)} className='btn'>
        {carta.text}</button>
    )
}

Card.defaultProps ={
    color: 'black'
}
export default Card