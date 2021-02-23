const IndividualCard = ({tableValues, onClick, color}) => {
    
    return (

        <button className='btn2' 
        onClick = {() => onClick(tableValues.id)} 
        style={{backgroundColor: color = tableValues.selected && 'red'}}>

            <div style = {{textAlign: 'left'} }> {tableValues.Suit} </div>

            <center> {tableValues.Rank} </center>

            <div style = {{textAlign: 'right'} }> {tableValues.Suit} </div>
        
        </button>
    )
    }

export default IndividualCard
