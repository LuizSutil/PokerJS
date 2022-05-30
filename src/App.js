import {createFactory, useState} from 'react'
import Header from './components/Header'
import Card from './components/Card'
import CardBuilder from './components/CardBuilder'
import HigherCard from './components/HigherCard'
import IndividualCard from './components/IndividualCard'
import Table from './components/Table'
import { getByTestId } from '@testing-library/react'
import {CardGroup, OddsCalculator} from 'poker-odds-calculator';




function App() {

//Card Ranks that you select to build hands/table
  const [cardRank, setcardRank]= useState([
    {
      id:1,
      text: '2',
      selected: false

    },
    {
      id:2,
      text: '3',
      selected: false
    },
    {
      id:3,
      text: '4',
      selected: false

    },
    {
      id:4,
      text: '5',
      selected: false

    },
    {
      id:5,
      text: '6',
      selected: false

    },
    {
      id:7,
      text: '7',
      selected: false

    },
    {
      id:8,
      text: '8',
      selected: false

    },
    {
      id:9,
      text: '9',
      selected: false

    },
    {
      id:10,
      text: '10',
      selected: false

    },
    {
      id:11,
      text: 'J',
      selected: false

    },
    {
      id:12,
      text: 'Q',
      selected: false

    },
    {
      id:13,
      text: 'K',
      selected: false

    },
    {
      id:14,
      text: 'A',
      selected: false

    },
    {
      id:15,
      text: 'nul',
      selected: false

    },
  ]
  )

//Card Suits that you select to build hands/table
  const [cardSuit, setcardSuit] = useState ([
    {
      id: 6,
      text: '♤',
      selected: false
    },
    {
      id: 7,
      text: '♡',
      selected: false
    },
    {
      id: 8,
      text: '♧',
      selected: false
    },
    {
      id: 9,
      text: '♢',
      selected: false
    }
  ]
  )

  const [table,setTable] = useState ([
  {
    id:10,
    pos: 'hand 1 card 1',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:11,
    pos: 'hand 1 card 2',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:12,
    pos: 'hand 2 card 1',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:13,
    pos: 'hand 2 card 2',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:14,
    pos: 'flop 1',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:15,
    pos: 'flop 2',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:16,
    pos: 'flop 3',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:17,
    pos: 'turn',
    Rank: '',
    Suit: '',
    selected: false
  },
  {
    id:18,
    pos: 'river',
    Rank: '',
    Suit: '',
    selected: false
  }


  ])
  
  const [p1chance, setP1Chance] = useState(0)
  const [p2chance, setP2Chance] = useState(0)

  
  //Causes Clicking on Rank to select it, deselecting other Ranks

  const onRank=  (id) => {
    setcardRank (cardRank.map((card) => card.id === id ?
      {...card, selected : !card.selected} : {...card, selected : false}) )
  }

  //Causes Clicking on Suit to Select it, Deselecting other Suits
  const onSuit=  (id) => {
    setcardSuit (cardSuit.map((card) => card.id === id ?
     {...card, selected : !card.selected} : {...card, selected : false}))
}

  //Causes Clicking on Table to select card, deselecting other Cards
  const onTable=  (id) => {
    setTable (table.map((card) => card.id === id ?
    {...card, selected : !card.selected}  : {...card, selected : false}))
    
    
  }
  const setter = () => {

    cardRank.map((card) => card.selected === true && 
    cardSuit.map((cardx) => cardx.selected === true &&
    setTable (table.map((carda) => carda.selected === true ? 
    {...carda, Rank : card.text, Suit : cardx.text} : {...carda})) )
    
    )

  }

  const replacer = (string) => {
    var y = string.replace("10","T")
    y= y.replace("♤","s")
    y = y.replace("♡","h")
    y = y.replace("♧","c")
    y= y.replace("♢","d")

    return y
  }

  
  const calculateOdds = () =>{

    const h1c1R = replacer(table[0].Rank)
    const h1c1S = replacer(table[0].Suit)

    const h1c2R = replacer(table[1].Rank)
    const h1c2S = replacer(table[1].Suit)    
  
    const h1c1 = [h1c1R,h1c1S].join("")
    const h1c2 = [h1c2R,h1c2S].join("")

    const h1 = [h1c1,h1c2].join("")


    const h2c1R = replacer(table[2].Rank)
    const h2c1S = replacer(table[2].Suit)

    const h2c2R = replacer(table[3].Rank)
    const h2c2S = replacer(table[3].Suit)    
  
    const h2c1 = [h2c1R,h2c1S].join("")
    const h2c2 = [h2c2R,h2c2S].join("")

    const h2 = [h2c1,h2c2].join("")


    
    
    const board = CardGroup.fromString("");

    const player1Cards = CardGroup.fromString(h1);
    const player2Cards = CardGroup.fromString(h2);
    
    const result = OddsCalculator.calculate([player1Cards, player2Cards], board);
    //console.log(result.equities[0].getEquity())
    //console.log(result.equities[1].getEquity())
    setP1Chance(result.equities[0].getEquity())
    setP2Chance(result.equities[1].getEquity())

  }

  return (
    <div className='container'>
      <Header />
      <div className='container1'>
        <CardBuilder cardArray = {cardRank} onClick = {onRank}/>
      </div>

      <div className ='container2'>      
        <CardBuilder cardArray = {cardSuit} onClick = {onSuit}/>
      </div>

      <div className='container3'>
        <button style = {{background:'steelblue'}}  className = 'btn' onClick = {setter} >set card</button>
        <button style = {{background:'purple'}} className = 'btn' onClick = {()=> calculateOdds(table)} >Calculate odds</button>
        <Table tableArray = {table} onClick = {onTable}/>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>
        <h3>P1 chance de ganhar: {p1chance}%</h3>
        <h3>P2 chance de ganhar: {p2chance}%</h3>
      </div>
      
    </div>
  );
}

export default App;