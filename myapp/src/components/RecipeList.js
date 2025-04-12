import React, { useEffect, useState } from 'react';
import axios from 'axios';
const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/recipes'); 
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };
    useEffect(() => {
        fetchRecipes();
    }, []);
    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>{recipe.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default RecipeList;