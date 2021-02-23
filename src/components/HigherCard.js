

const HigherCard = (card1,card2) => {
    return (
        <>
            {card1 > card2 ? console.log(`${card1 + 1} is bigger than ${card2 + 1}`) : 
            card1 === card2 ? console.log(`${card1 + 1} is equal to ${card2 + 1}`) : 
            console.log(`${card1 + 1} is smaller than ${card2 + 1}`)}     
        </>
    )
}

export default HigherCard
