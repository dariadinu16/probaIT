import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; 
import Recipes from './Recipes';  
import RecipeDetail from './RecipeDetail'; 
import Register from './Register';  
import Login from './Login';  
import AddRecipe from './AddRecipe'; 

function App() {
  return (
    <Router>
      <Header />
      
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<h2>Welcome to chefIT</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
