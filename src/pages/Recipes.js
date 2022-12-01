import { Link, useLocation } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import useCategories from '../hooks/useCategories';

import Header from '../components/Header';

function Recipes() {
  const { pathname } = useLocation();

  const {
    categories,
    selectedCategory,
    toggleSelectedCategory,
  } = useCategories(pathname);

  const { data: recipes } = useRecipes(pathname, selectedCategory);

  return (
    <>
      <Header search title="Meals" />
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
              to={ `/${pathname.slice(1)}/${recipe.id}` }
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
    </>
  );
}

export default Recipes;
