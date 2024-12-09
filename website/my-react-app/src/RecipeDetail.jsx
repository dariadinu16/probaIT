// src/RecipeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    name: 'Pizza',
    ingredients: ['Aluat', 'Sos de roșii', 'Mozzarella', 'Pepperoni'],
    steps: [
      '1. Preîncălzește cuptorul la 200°C.',
      '2. întinde aluatul și pune sosul de roșii.',
      '3. Adaugă mozzarella și toppinguri.',
      '4. Coace timp de 15-20 de minute.',
    ],
  },
  {
    id: 2,
    name: 'Paste Carbonara',
    ingredients: ['Spaghetti', 'Pancetta', 'Ouă', 'Parmezan', 'Piper'],
    steps: [
      '1. Fierbe pastele.',
      '2. Prăjește pancetta.',
      '3. Amestecă ouăle cu parmezanul.',
      '4. Combină pastele cu pancetta și amestecă cu ouăle.',
    ],
  },
  {
    id: 3,
    name: 'Lasagna',
    ingredients: ['Foi de lasagna', 'Carne tocată', 'Sos de roșii', 'Mozzarella', 'Bechamel'],
    steps: [
      '1. Preîncălzește cuptorul la 180°C.',
      '2. Pregătește sosul de carne și bechamel.',
      '3. Așază foile de lasagna, carne și sos.',
      '4. Coace timp de 45 de minute.',
    ],
  },
  // Poți adăuga mai multe rețete aici
];

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Rețeta nu a fost găsită!</h2>;
  }

  return (
    <div className="recipe-detail-container">
      <h2>{recipe.name}</h2>
      <h3>Ingrediente:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Pași de urmat:</h3>
      <ul>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
