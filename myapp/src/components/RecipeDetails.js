import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await axios.get(`http://localhost:5000/api/recipes/${id}`);
            setRecipe(response.data);
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;
    return (
        <div>
            <h1>{recipe.name}</h1>
            <h2>Ingredients</h2>
            <p>{recipe.ingredients}</p>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
        </div>
    );
};
export default RecipeDetails;