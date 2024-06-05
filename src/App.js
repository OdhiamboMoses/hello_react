import React, { Component } from 'react';  
import Navbar from './components/Navbar';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';
class App extends Component{  
   render(){  
      return(  
         <div className="App">  
            <Navbar />
            <AddRecipe />
            <RecipeList />
         </div>  
      );  
   }  
}  
export default App; 
