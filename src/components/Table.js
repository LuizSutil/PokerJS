import IndividualCard from './IndividualCard'

const Table = ({tableArray, onClick}) => {


    return (
        
        <div className = 'table'>
            <div>
                {tableArray.map((carta) => ( 
                (carta.id === 10 ? (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id}/>) : 
                carta.id === 11 && (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id}/> )
                )))}
            </div>
            <div>
                {tableArray.map((carta) => (
                (carta.id === 14 ? (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id}/>)
                : carta.id === 15 ? (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id} /> ) 
                : carta.id === 16 ? (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id} /> )
                : carta.id === 17 ? (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id} /> )
                : carta.id === 18 && (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id} /> )
                )))}
            </div>
            <div>
                    {tableArray.map((carta) => (
                    (carta.id === 12 ? (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id}/>) 
                    : carta.id === 13 && (<IndividualCard tableValues = {carta} onClick = {onClick} key = {carta.id}/> ))))}
            </div>
            </div>
    )
}

export default Table
