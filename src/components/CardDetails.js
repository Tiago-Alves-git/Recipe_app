// CardDetails.js
import PropTypes from 'prop-types';
import React from 'react';
import '../Style/cardDetails.css';

function CardDetails({ recipe, basePath }) {
  return (
    <div className="RecipeCard">
      <h5 className="RecipeCard-title" data-testid="recipe-title">
        {recipe.title}
      </h5>
      <img
        className="RecipeCard-img"
        data-testid="recipe-photo"
        src={ recipe.photo }
        alt={ recipe.title }
      />
      <p className="RecipeCard-category" data-testid="recipe-category">
        {basePath === 'meals' ? recipe.category : recipe.alcoholic}
      </p>
    </div>
  );
}

CardDetails.propTypes = {
  basePath: PropTypes.string.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string,
    alcoholic: PropTypes.bool,
    category: PropTypes.string,
    photo: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default CardDetails;
