import React, {Component} from 'react';
import "./DrinkDetails.css"

import DrinkDetailTile from '../components/drinks/DrinkDetailTile';

class DrinkDetails extends Component {

  render() {
    return(
      <div className="DrinkDetails">
        <div className="row">
          <h1>Cocktails</h1>
          {this.props.cocktails.map((cocktail, index) =>
            <DrinkDetailTile 
              {...this.props}
              key={index.toString()}
              {...cocktail}
            />)}
        </div>  
      </div>
    )
  }

}

export default DrinkDetails;