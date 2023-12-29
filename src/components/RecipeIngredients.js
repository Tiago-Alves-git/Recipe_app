import PropTypes, { shape } from 'prop-types';
import React from 'react';
import '../Style/RecipeIngredients.css';

function RecipeIngredients({ recipe }) {
  return (
    <div className="ingredient-list-container">
      <ul className="ingredient-list">
        {recipe.ingredients.map(({ ingredient, measure }, i) => (
          <li key={ i } className="list-item">
            <span>{ingredient}</span>
            <span>{measure}</span>
          </li>
        ))}
      </ul>
      <p className="Recipe-instructions">{recipe.instructions}</p>
    </div>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(shape({})),
    measure: PropTypes.string,
    instructions: PropTypes.string,
  }).isRequired,
};

export default RecipeIngredients;
