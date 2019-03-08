import React from 'react';
import Cocktail from './Cocktail'
export default class CocktailList extends React.Component{




render(){
  // console.log(this.props.cocktails);

    let list = this.props.cocktails.map(cocktail => {
      return <Cocktail cocktail={cocktail} key={cocktail.name} handleClick={this.props.handleClick} handleRemove={this.props.handleRemove}/>  })
      return(
    <div className="scroller">
    {list}
    </div>
  )
}
}
