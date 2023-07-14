import './App.css';
import Cards from './components/Cards/Cards'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import {useState} from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [userName, setUsername] = useState('')
  const [cardsData, setCardsData] = useState([])
  const updateName = (name)=>{
    setUsername(name)
  }
  const getCards = (cards)=>{
    let finalCards=[]
    
    for(let [k,v] of Object.entries(cards)){
      let newCard={}
      newCard={...v, key:k}
      finalCards.push(newCard)
    }
    setCardsData(finalCards)
  }

  // const cardData = [
  //   {
  //     id: 1,
  //     name: 'Mary',
  //     level: 13,
  //     point: 2355,
  //     description: 'This is description.This is description.This is description.This is description.',
  //     image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
  //   },
  //   {
  //     id: 2,
  //     name: 'Lucy',
  //     level: 10,
  //     point: 123,
  //     description: 'This is description.This is description.This is description.This is description.',
  //     image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
  //   },
  //   {
  //     id: 3,
  //     name: 'Tom',
  //     level: 9,
  //     point: 4323,
  //     description: 'This is description.This is description.This is description.This is description.',
  //     image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
  //   },
  //   {
  //     id: 4,
  //     name: 'Lily',
  //     level: 13,
  //     point: 765,
  //     description: 'This is description.This is description.This is description.This is description.',
  //     image: "https://cdn-icons-png.flaticon.com/512/147/147144.png"
  //   }
  // ]
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login onUpdateName={updateName} onGetCards={getCards} />
        </Route>
        <Route path="/cards">
          <Cards userName={userName} cardsData = {cardsData}/>
        </Route>
        <Route path="/">
          <Login onUpdateName={updateName} onGetCards={getCards} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
