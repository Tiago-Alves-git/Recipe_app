import React from 'react';
import PropTypes, { string } from 'prop-types';

function ButtonFinishRecipe({ checkedIngredients, recipe, finishRecipe }) {
  return (
    <button
      data-testid="finish-recipe-btn"
      type="button"
      className="button-start--recipe"
      disabled={ checkedIngredients.length !== recipe.ingredients.length }
      onClick={ () => finishRecipe() }
    >
      Finish Recipe
    </button>
  );
}

ButtonFinishRecipe.propTypes = {
  checkedIngredients: PropTypes.arrayOf(string).isRequired,
  recipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        ingredient: PropTypes.string,
      }),
    ),
  }).isRequired,
  finishRecipe: PropTypes.func.isRequired,
};

export default ButtonFinishRecipe;
