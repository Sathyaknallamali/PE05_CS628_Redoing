import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/add" element={<AddRecipe />} />
                    <Route path="/recipes/:id" element={<RecipeDetails />} />
                    <Route path="/edit/:id" element={<EditRecipe />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;