import { useParams } from 'react-router-dom';
import useRecipe from '../hooks/useRecipe';
import useBasePath from '../hooks/useBasePath';

import ButtonStartRecipe from '../components/ButtonStartRecipe';

function RecipeDetails() {
  const basePath = useBasePath();
  const { id } = useParams();

  const { data: recipe } = useRecipe(basePath, id);

  return (
    <>
      <div>RecipeDetails</div>
      { recipe.name }
      <ButtonStartRecipe />
    </>
  );
}

export default RecipeDetails;
