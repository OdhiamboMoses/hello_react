import React, {useState} from "react";

const AddRecipe = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleAddRecipe = () => {
        const newRecipe = {
            id: recipes.length + 1,
            name: name,
            ingredients: ingredients.split(','),
        };
        setRecipes([...recipes, newRecipe]);
        setName('');
        setIngredients('');
    };

    return(
        <div>
            <h2>Add Recipe</h2>
            <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)}/>
            <button onClick={handleAddRecipe}>Add Recipe</button>
        </div>
    );
};

export default AddRecipe;