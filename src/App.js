import {createFactory, useState} from 'react'
import Header from './components/Header'
import Card from './components/Card'
import CardBuilder from './components/CardBuilder'
import HigherCard from './components/HigherCard'
import IndividualCard from './components/IndividualCard'
import Table from './components/Table'
import { getByTestId } from '@testing-library/react'




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

  return (
    <div className='container'>
      <Header / >
      <div className='container1'>
        <CardBuilder cardArray = {cardRank} onClick = {onRank}/>
      </div>

      <div className ='container2'>      
        <CardBuilder cardArray = {cardSuit} onClick = {onSuit}/>
      </div>

      <div className='container3'>
        <button style = {{background:'steelblue'}}  className = 'btn' onClick = {setter} >set card</button>
        <button style = {{background:'purple'}} className = 'btn' >Calculate odds</button>
        <Table tableArray = {table} onClick = {onTable}/>
      </div>
        
      
    </div>
  );
}

export default App;