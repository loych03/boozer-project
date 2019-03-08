import React from 'react';
import CocktailList from './CocktailList'
// import NewCocktail from './NewCocktail';
import {Link} from 'react-router-dom'

export default class CocktailsContainer extends React.Component{


render(){
// console.log(this.props);
  return(
    <div>
    <ul className="navlink">
    <li><Link to='/home' className="homeLink">Home</Link></li>
    <li><Link to='/form' className="homeLink">Form</Link></li>
    </ul>
    <CocktailList cocktails={this.props.cocktails} handleClick={this.props.handleClick} handleRemove={this.props.removeCocktail}/>
    </div>
  )
}



}
