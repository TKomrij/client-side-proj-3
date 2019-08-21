import React, {Component} from 'react';
import "./Cocktails.css"
import MainLayout from '../layout/MainLayout'
import CocktailTile from '../components/drinks/CocktailTile';

class Cocktails extends Component {
  
  state = {
    cocktails: this.props.cocktails,
    searchedCocktails: this.props.cocktails
  };

  search = (event)=> {
    let searchTerm = event.target.value;
    let searchedCocktails = this.state.cocktails.filter((cocktail)=> (
        cocktail.strCategory.indexOf(searchTerm) >= 0 
    )); 
    this.setState({searchedCocktails})
  }
  render() {
    return(
      <MainLayout>
        <div className="Cocktails">
          <div className="row">
            <h1>Cocktails</h1>
              <div className="dropdown3">
              <input onChange={this.search} placeholder="search ail, da, ot, er..." type="text"/>
              </div>  
            <hr></hr>
            <div className="next">
              {this.state.searchedCocktails.map((cocktail, index) =>
                <CocktailTile 
                  key={index.toString()}
                  {...cocktail}
              />)}
            </div>
          </div>  
        </div>
      </MainLayout>
    )
  }

}

export default Cocktails;