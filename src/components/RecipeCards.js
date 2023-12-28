import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useBasePath from '../hooks/useBasePath';

function RecipeCards({ Recipes }) {
  const basePath = useBasePath();

  return (
    <div className="cards">
      { Recipes.map((recipe, i) => (
        <div
          className="card"
          key={ recipe.id }
          data-testid={ `${i}-recipe-card` }
        >
          <Link
            to={ `/${basePath}/${recipe.id}` }
          >
            <img
              className="card-img-top"
              data-testid={ `${i}-card-img` }
              src={ recipe.thumb }
              alt={ recipe.name }
            />
          </Link>

          <div className="card-body">
            <span data-testid={ `${i}-card-name` } className="card-title">
              { recipe.name }
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

RecipeCards.propTypes = {
  Recipes: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default RecipeCards;
