import React, { Component } from 'react';
import CocktailsContainer from './CocktailsContainer';
import './App.css';
import Home from './Home';
import CocktailDisplay from './CocktailDisplay';
import NewCocktail from './NewCocktail';
import CocktailSearchForm from './CocktailSearchForm';
import {Route, Switch} from 'react-router-dom'


class App extends Component {

  state = {
    cocktail: {},
    proportions: {},
    cocktails: [],
    filteredArr: [],
      searchTerm: ""
  }
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/cocktails")
    .then(response => response.json())
    .then(data =>
    this.setState({
      cocktails: data,
      filteredArr: data
    }))
  }


    handleClick= obj => {
     this.setState({
       cocktail: obj
     }, this.fetchDetail)
      }

  fetchDetail = () =>{
    let cocktailId = this.state.cocktail.id
      fetch(`http://localhost:3000/api/v1/cocktails/${cocktailId}`, {
          method: 'GET'
        })
      .then(res => res.json())
      .then(data=>
      this.setState({
        proportions: data
      }))
  }

  removeCocktail = cocktailObj =>  {
    let newArr = this.state.filteredArr.filter(cocktail => cocktail !== cocktailObj)
    this.setState({
      filteredArr: newArr
    })
      let cocktailId = cocktailObj.id
      return fetch(`http://localhost:3000/api/v1/cocktails/${cocktailId}`, {
          method: 'DELETE'
        })
  }

  addNewCocktail= newCocktail =>{
    let newArr = [...this.state.cocktails, newCocktail]
    this.setState({
      filteredArr: newArr
    })
  }



  searchHandleChange = e => {
    e.preventDefault()
    let term= e.target.value.toUpperCase()
    let filterArr = [...this.state.cocktails].filter(cocktail =>cocktail.name.includes(term))
     this.setState({
      searchTerm: e.target.value,
      filteredArr: filterArr
     })
   }


  render() {
  //   console.log(this.state.proportions)

    return (
      <div className="App">
      <CocktailSearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchHandleChange}/>
      <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/cocktails' component={props=><CocktailsContainer cocktails={this.state.filteredArr} addNewCocktail={this.addNewCocktail} handleClick={this.handleClick} removeCocktail={this.removeCocktail}{...props}/>} />
      <Route exact path='/form' component={props=><NewCocktail proportions={this.props.proportions} cocktails={this.props.cocktails} addNewCocktail={this.props.addNewCocktail}{...props}/>}/>
     <Route exact path='/cocktails/:id' component={props => <CocktailDisplay cocktails={this.state.filteredArr} cocktail={this.state.cocktail} ingredients={this.state.proportions}{...props}/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;
