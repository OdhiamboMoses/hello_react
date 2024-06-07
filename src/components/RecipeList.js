import React, {useState, useEffect} from "react";
import './ReactList.css';
import dataRecipes from './Data.js';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchedRecipes = async () => {
        setRecipes(dataRecipes);
    };
    fetchedRecipes();
},
     []);

return(
    <div>
        <h2>Recipe List</h2>
        {recipes.map(recipe => (
            <div key={recipe.id} className="rep-list">
                <h3>{recipe.name}</h3>
                <ul>
                    {recipe.ingredients.map((ingredients, index) => (
                        <li key={index}>{ingredients}</li>
                    ))}
                </ul>
                </div>
        ))}
    </div>
);
};

export default RecipeList;

