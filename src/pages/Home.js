import React from 'react'

import "./Home.css"
import { Link } from "react-router-dom"
import MainLayout from '../layout/MainLayout';

export default function Home() {
  return (
      <MainLayout>
        <div className="Home">
          <div className="div1">
            <img src="./img/making-it.jpg" alt="cellar"></img>
            <p>The Ancient Romans used to drop a piece of toast into their wine for good health. They would put the toast in their fellow drinkers’ wines too and that’s where the phrase, “to toast”, comes from!</p>
            <Link to="/cocktails">Cocktails</Link>
          </div>
          <div className="div2">
            <img src="./img/top-shelf.jpg" alt="more wine"></img>
            <p>In 1694, Admiral Edward Russell created the world’s largest cocktail of 250 gallons of brandy, 125 gallons of Malaga wine, 1,400 pounds of sugar, 2,500 lemons, 20 gallons of lime juice, and 5 pounds of nutmeg, in a punch bowl so large it had to be served by a boy rowing across it. </p>
            <Link to="/history">History</Link>
          </div>
        </div>
    
      </MainLayout>

  )
}



