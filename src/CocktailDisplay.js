import React from 'react';
import {Link} from 'react-router-dom'

export default class CocktailDisplay extends React.Component{


render(){

  return(
    <div className= "detail">
      <h3>{this.props.cocktail.name}</h3>
      <h3>{this.props.cocktail.description}</h3>
      <h3>Instructions: {this.props.cocktail.instructions}</h3>
      <h4>Ingredients: {this.props.ingredients.proportions?
         this.props.ingredients.proportions.map(ingredient  =>
           ingredient.ingredient_name.split(" ").join(", "))
       : null}</h4>
       <h4>Source: {this.props.cocktail.source}</h4>
       <Link to="/cocktails">
       <button className="detailButton">Back to Cocktails</button>
       </Link>
    </div>
  )
}

}
