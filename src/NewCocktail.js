import React from 'react';
import {Link} from 'react-router-dom'

export default class NewCocktail extends React.Component{
state={
  name: "",
  description:"",
  instructions:"",
  ingredientIndex:0,
  proportions:[{
    id: "",
    ingredient_name:"",
    ingredientQuantity:""
  }]
}


handleChange =(e)=>{
   e.preventDefault()
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleIngredientName = e => {
  e.preventDefault()
  let newProportions = this.state.proportions;
  newProportions[this.state.ingredientIndex]["ingredient_name"] = e.target.value;
  this.setState({
    proportions: newProportions
  });
};

handleIngredientQuantity = e => {
  e.preventDefault()
  let newProportions = this.state.proportions;
  newProportions[this.state.ingredientIndex]["ingredientQuantity"] = e.target.value;
  this.setState({
    proportions: newProportions
  });
};


 addProportions = e => {
      e.preventDefault();
      let newIngredient = {ingredient_name: "", ingredientQuantity: ""};
      this.setState({
        ingredientIndex: this.state.ingredientIndex + 1,
        proportions: [...this.state.proportions, newIngredient]
      });
    };





fetchNewCocktail =()=> {
  fetch("http://localhost:3000/api/v1/cocktails", {
    method: 'POST',
    body: JSON.stringify({
      // id:this.state.id,
      name: this.state.name,
      description: this.state.description,
      instructions: this.state.instructions,
      ingredientIndex: this.state.ingredientIndex,
      proportions: this.state.proportions.map(prop =>
            [{
              id: prop.id,
              ingredient_name: prop.ingredient_name,
              ingredientQuantity: prop.ingredientQuantity
            }])
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(data=>console.log(data))

}



  render(){
    //
    console.log(this.state);
    return(
      <div>
      <ul className="navlink">
        <li><Link to='/cocktails'>Cocktails</Link></li>
      </ul>

      <form className="newForm" onSubmit={()=>this.props.addNewCocktail(this.props)}>
      <h2>Create New Cocktail</h2>
      <p>Name:</p>
      <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
      <p>Description:
      <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/></p>
      <p>Instructions:
      <input type="text" name="instructions" placeholder="Instructions" value={this.state.instructions} onChange={this.handleChange}/></p>
      <h3>Proportions</h3>
        {this.state.proportions.map(proportion =>
      <div className="container" key={proportion.ingredient_name}>
      <p>Ingredient Name:
      <input name="ingredient_name" placeholder="Ingredient Name" type="text" value={proportion.ingredient_name} onChange={this.handleIngredientName}/>
        Quantity:
        <input name="ingredientQuantity" placeholder="Quantity" type="text"  value={proportion.ingredientQuantity} onChange={this.handleIngredientQuantity}/>
      </p>
      </div>
    )
  }
      <p>
         <button className="button" onClick={this.addProportions}> + </button>

       </p>
      <input onClick={this.fetchNewCocktail} className="createButton" type="submit" value="Create Cocktail"/>
      </form>
      </div>
    )
  }
}
