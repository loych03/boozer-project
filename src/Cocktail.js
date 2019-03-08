import React from 'react';
import {Link} from 'react-router-dom'

export default class Cocktail extends React.Component{




render(){

  return(
    <div className= "list">
    <Link to={`/cocktails/${this.props.cocktail.id}`}>
      <ul key={this.props.cocktail.name} onClick={()=>this.props.handleClick(this.props.cocktail)}>{this.props.cocktail.name}</ul>
      </Link>
      <button className="button" onClick={() => this.props.handleRemove(this.props.cocktail)}>-</button>
    </div>
  )
}
}
