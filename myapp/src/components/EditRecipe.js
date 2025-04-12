import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditRecipe = () => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/recipes/${id}`);
                const recipe = response.data;
                setName(recipe.name);
                setIngredients(recipe.ingredients.join(', '));
                setInstructions(recipe.instructions);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchRecipe();
    }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRecipe = { name, ingredients: ingredients.split(', '), instructions };

        try {
            await axios.put(`http://localhost:5000/api/recipes/${id}`, updatedRecipe);
            navigate('/');
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    return (
        <div>
            <h1>Edit Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Recipe Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ingredients:</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Instructions:</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
};
export default EditRecipe;