import React, {useEffect, useState} from "react";
import dataRecipes from "./Data";

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState(dataRecipes);
    console.log(recipes);

    useEffect(() => {
        setRecipes(dataRecipes);
    }, []);

        console.log(recipes);



    const handleAddRecipe = () => {
        const newRecipe = {
            id: recipes.length + 1,
            name: name,
            ingredients: ingredients.split(',').map(ingredients => ingredients.trim()),
        };
        
        const check = [...recipes, newRecipe] 
        setRecipes(check);
    };

    return(
        <div>
            <h2>Add Recipe</h2>
            <input type="text" placeholder="Recipe Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)} required/>
            <button onClick={handleAddRecipe}>Add Recipe</button>
        </div>
    );
};

export default AddRecipe;