import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css'; 

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !ingredients || !steps) {
      setError('Toate câmpurile sunt obligatorii!');
      return;
    }

    const newRecipe = {
      name,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      steps: steps.split('.').map(step => step.trim()).filter(step => step.length > 0),
    };

    console.log('New Recipe:', newRecipe);

    navigate('/recipes');
  };

  return (
    <div className="add-recipe-container">
      <h2>Adaugă o Rețetă</h2>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <div>
          <label>Numel Rețetei</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ex: Pizza"
          />
        </div>
        <div>
          <label>Ingrediente (separate prin virgulă)</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            placeholder="Ex: Aluat, Mozzarella, Sos de roșii"
          />
        </div>
        <div>
          <label>Pași (separate prin punct)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
            placeholder="Ex: 1. Preîncălzește cuptorul... 2. Pune ingredientele..."
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="submit-button">Adaugă Rețeta</button>
      </form>
    </div>
  );
};

export default AddRecipe;
