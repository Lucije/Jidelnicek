import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Apple from './img/logo_apple.png'
import Recipes from "./Pages/Recipes";
import Home from "./Pages/Home";
import MealPlanner from './Pages/MealPlanner';

export default function App() {
  const [alldata, setAllData] = useState({})

  const dataFromHome = (data) => {
    setAllData(data)


  }

console.log(alldata)


  return (
    <Router>
      <div className="router">
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/MealPlanner">Meal Planner</Link>
            </li>
            <img className="logo" src={Apple} alt="logo"></img>
            <li>
              <Link to="/Recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/users">About me</Link>
            </li>
          </ul>
        </nav>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route index element={<Home dataHome = {dataFromHome} />} />
        <Route path='/Home' element={<Home dataHome = {dataFromHome}/>} />
        <Route path='/MealPlanner' element={<MealPlanner BMR ={alldata.BMR}/>} />
        <Route path='Recipes' element={<Recipes/>} />
      
      </Routes>
      </div>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}



 


