import React from 'react';

const CocktailSearchForm = (props) => {


    return(

      <form className="searchForm">
      Search Cocktail:
        <input type="text" placeholder="Search By Name" value={props.searchTerm} onChange={props.changeHandler}/>
      </form>

    )
  }

export default CocktailSearchForm
