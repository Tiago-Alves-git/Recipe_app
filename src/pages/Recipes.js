import { Link } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import useCategories from '../hooks/useCategories';
import useBasePath from '../hooks/useBasePath';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Recipes() {
  const basePath = useBasePath();
  const {
    categories,
    selectedCategory,
    toggleSelectedCategory,
  } = useCategories(basePath);

  const { data: recipes } = useRecipes(basePath, selectedCategory);

  return (
    <>
      <Header search title={ basePath === 'meals' ? 'Meals' : 'Drinks' } />
      {
        categories.map((category) => (
          <button
            type="button"
            key={ category.strCategory }
            data-testid={ `${category.strCategory}-category-filter` }
            className={
              `${selectedCategory === category.strCategory ? 'selected' : ''}`
            }
            onClick={ () => toggleSelectedCategory(category.strCategory) }
          >
            { category.strCategory }
          </button>
        ))
      }
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => toggleSelectedCategory() }
      >
        All
      </button>
      {
        recipes.map((recipe, i) => (
          <div
            key={ recipe.id }
            data-testid={ `${i}-recipe-card` }
          >
            <Link
              to={ `/${basePath}/${recipe.id}` }
            >
              <img
                data-testid={ `${i}-card-img` }
                src={ recipe.thumb }
                alt={ recipe.name }
              />
            </Link>
            <span data-testid={ `${i}-card-name` }>{ recipe.name }</span>
          </div>
        ))
      }
      <Footer />
    </>
  );
}

export default Recipes;
