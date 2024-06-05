import React, {useState, useEffect} from "react";
import './ReactList.css';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchedRecipes = async () => {
        const fetchedRecipes = [
            {
                id: 1, name: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Minced Meat', 'Tomato Sause']
            },{
                id: 2, name: 'Chicken Curry', ingredients: ['Chicken', 'Curry Paste', 'Coconut Milk']
            },{
                id: 3, name: 'Uji Power', ingredients:['Wheat Flour', 'Water', 'Yarm']
            }
        ];
        setRecipes(fetchedRecipes);
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

