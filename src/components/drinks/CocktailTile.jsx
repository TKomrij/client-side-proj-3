import React from 'react';
import "./CocktailTile.css"
import { Link } from "react-router-dom"

const CocktailTile = (props) => {

  return (
    <Link to={`/drinkdetails/${props._id}`}>
      <div className="CocktailTile">
        <div className="center">
          <img src={props.strDrinkThumb} alt="drink"/>
        </div>
        <p className="name">{props.strDrink}</p>
        <p className="type">{props.strCategory}</p>
        <hr></hr>
      </div>
    </Link>
  )
}

export default CocktailTile;