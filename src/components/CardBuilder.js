import Card from './Card'


const CardBuilder = ({cardArray,onClick, color}) => {

    

    return (
        <>
            {cardArray.map((carta) => (
            
            <Card 
                key = {carta.id}
                carta = {carta} 
                onClick= {onClick} 
                color={color}
            />       
            ))}
        </>
    )
}

export default CardBuilder
