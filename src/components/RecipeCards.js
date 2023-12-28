import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useBasePath from '../hooks/useBasePath';

function RecipeCards({ Recipes }) {
  const basePath = useBasePath();
  console.log(Recipes);

  return (
    <div className="recipe-container">
      { Recipes.map((recipe, i) => (
        <div
          className="recipe-card"
          key={ recipe.id }
          data-testid={ `${i}-recipe-card` }
        >
          <div className="recipe-content">
            <span data-testid={ `${i}-card-name` } className="recipe-title">
              { recipe.name }
            </span>
          </div>
          <Link
            to={ `/${basePath}/${recipe.id}` }
          >
            <img
              className="recipe-image"
              data-testid={ `${i}-card-img` }
              src={ recipe.thumb }
              alt={ recipe.name }
            />
          </Link>

        </div>
      ))}
    </div>
  );
}

RecipeCards.propTypes = {
  Recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RecipeCards;
