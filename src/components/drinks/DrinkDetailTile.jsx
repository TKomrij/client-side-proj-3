import React, { Component } from 'react';
import "./DrinkDetailTile.css"
import MainLayout from '../../layout/MainLayout';

class DrinkDetailTile extends Component {


  findCocktail = (cocktailID) => {
    let foundCocktail = this.props.cocktails.find(cocktail => cocktail._id === cocktailID);
    return foundCocktail
  }
    
  render() {
    const Cocktail = this.findCocktail(this.props.match.params.id)
    return (
      <MainLayout>
       {Cocktail?  
        <div className="DrinkDetailTile">
          <div className="center">
            <img className="img" src={Cocktail.strDrinkThumb} alt="drink"></img>
          </div>
          <h1>Recipe</h1>
          <button type="submit" className="like" onClick="favoriteImage(event, {{id}});"></button>
          <h3>Ingredients:</h3>
          <div className="row">
            <div className="column">
              <p>{Cocktail.strMeasure1}</p>
              <p>{Cocktail.strMeasure2}</p>
              <p>{Cocktail.strMeasure3}</p>
              <p>{Cocktail.strMeasure4}</p>
              <p>{Cocktail.strMeasure5}</p>
              <p>{Cocktail.strMeasure6}</p>
              <p>{Cocktail.strMeasure7}</p>
              <p>{Cocktail.strMeasure8}</p>
              <p>{Cocktail.strMeasure9}</p>
              <p>{Cocktail.strMeasure10}</p>
              <p>{Cocktail.strMeasure11}</p>
              <p>{Cocktail.strMeasure12}</p>
              <p>{Cocktail.strMeasure13}</p>
              <p>{Cocktail.strMeasure14}</p>
              <p>{Cocktail.strMeasure15}</p>
            </div>
            <div className="ing">
              <p>{Cocktail.strIngredient1}</p>
              <p>{Cocktail.strIngredient2}</p>
              <p>{Cocktail.strIngredient3}</p>
              <p>{Cocktail.strIngredient4}</p>
              <p>{Cocktail.strIngredient5}</p>
              <p>{Cocktail.strIngredient6}</p>
              <p>{Cocktail.strIngredient7}</p>
              <p>{Cocktail.strIngredient8}</p>
              <p>{Cocktail.strIngredient9}</p>
              <p>{Cocktail.strIngredient10}</p>
              <p>{Cocktail.strIngredient11}</p>
              <p>{Cocktail.strIngredient12}</p>
              <p>{Cocktail.strIngredient13}</p>
              <p>{Cocktail.strIngredient14}</p>
              <p>{Cocktail.strIngredient15}</p>
            </div>
          </div>

          <p className="glass">{Cocktail.strGlass}</p>

          <h3>Instructions:</h3>
          <p className="glass glass2">{Cocktail.strInstructions}</p>


        </div>:
        <>
          <div className="spacer"></div>
          <h1>Cocktail not found</h1>
        </>
      }
      </MainLayout>
    )
  }
}


export default DrinkDetailTile;