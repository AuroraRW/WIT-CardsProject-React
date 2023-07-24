import './App.css';
import Cards from './components/Cards/Cards'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import NewCard from './components/Cards/NewCard';
// import {useState} from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
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
          <Login />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/newcard">
          <NewCard />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
