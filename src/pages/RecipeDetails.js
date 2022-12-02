import { useParams } from 'react-router-dom';
import useRecipe from '../hooks/useRecipe';
import useBasePath from '../hooks/useBasePath';

import ButtonStartRecipe from '../components/ButtonStartRecipe';

function RecipeDetails() {
  const basePath = useBasePath();
  const { id } = useParams();

  const { data: recipe, loading } = useRecipe(basePath, id);

  console.log(recipe);

  if (loading) return 'Loading...';

  return (
    <>
      <div>RecipeDetails</div>
      <img
        data-testid="recipe-photo"
        src={ recipe.photo }
        alt={ recipe.title }
      />
      <span data-testid="recipe-title">
        { recipe.title }
      </span>
      <span data-testid="recipe-category">
        { basePath === 'meals' ? recipe.category : recipe.alcoholic }
      </span>
      <ul>
        {
          recipe.ingredients.map(({ ingredient, measure }, i) => (
            <li key={ ingredient } data-testid={ `${i}-ingredient-name-and-measure` }>
              <span>{ ingredient }</span>
              <span>{ measure }</span>
            </li>
          ))
        }
      </ul>
      <p data-testid="instructions">{ recipe.instructions }</p>
      {
        recipe.video && (
          <iframe
            title={ recipe.title }
            width="560"
            height="315"
            src={ `${recipe.video}&autoplay=0` }
            frameBorder="0"
            allowFullScreen
            data-testid="video"
          />
        )
      }
      <ButtonStartRecipe />
    </>
  );
}

export default RecipeDetails;
