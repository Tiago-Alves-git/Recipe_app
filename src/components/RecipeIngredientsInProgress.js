import PropTypes, { string } from 'prop-types';
import '../Style/RecipeDetails.css';

function RecipeIngredientInProgress({
  recipe,
  toggleCheckedIngredient,
  checkedIngredients,
}) {
  return (
    <div className="ingredient-list-container">
      <ul className="ingredient-list">
        { recipe.ingredients.map(({ ingredient, measure }, i) => (
          <li key={ i } className="list-item">
            <label
              htmlFor={ `${i}-ingredient-step` }
              data-testid={ `${i}-ingredient-step` }
              style={ {
                color: 'black',
                textDecoration: checkedIngredients.some(
                  (ing) => ing === `${ingredient} - ${measure}`,
                )
                  ? 'line-through' : 'none',
              } }

            >
              <span>
                { `${ingredient} - ${measure}` }
              </span>

              <input
                type="checkbox"
                id={ `${i}-ingredient-step` }
                checked={ checkedIngredients.some(
                  (ing) => ing === `${ingredient} - ${measure}`,
                ) }
                onChange={ () => toggleCheckedIngredient(ingredient, measure) }
              />
            </label>
          </li>
        ))}
      </ul>
      <p className="Recipe-instructions">{recipe.instructions}</p>
    </div>
  );
}

RecipeIngredientInProgress.propTypes = {
  recipe: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      ingredient: PropTypes.string,
    })),
    instructions: PropTypes.string.isRequired,
  }).isRequired,
  toggleCheckedIngredient: PropTypes.func.isRequired,
  checkedIngredients: PropTypes.arrayOf(string).isRequired,
};

export default RecipeIngredientInProgress;
