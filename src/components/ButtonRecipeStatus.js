import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import '../Style/ButtonRecipeStatus.css';

function ButtonRecipeStatus(props) {
  const { id, type } = props;

  const history = useHistory();

  const doneRecipesStorage = localStorage.getItem('doneRecipes');
  const doneRecipes = doneRecipesStorage ? JSON.parse(doneRecipesStorage) : [];

  const inProgressRecipesStorage = localStorage.getItem('inProgressRecipes');
  const inProgressRecipes = inProgressRecipesStorage
    ? JSON.parse(inProgressRecipesStorage) : {};

  if (doneRecipes.some((doneRecipe) => doneRecipe.id === id
    && doneRecipe.type === type)) {
    return '';
  }

  if (inProgressRecipes[type]?.[id]) {
    return (
      <button
        data-testid="start-recipe-btn"
        type="button"
        className="button-start--recipe"
      >
        Continue Recipe
      </button>
    );
  }

  return (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="button-start--recipe"
      onClick={ () => history.push(`/${type}/${id}/in-progress`) }
    >
      Start Recipe
    </button>
  );
}

ButtonRecipeStatus.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ButtonRecipeStatus;
