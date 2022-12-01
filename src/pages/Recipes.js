import { useLocation } from 'react-router-dom';
import useRecipes from '../hooks/useRecipes';
import useCategories from '../hooks/useCategories';

import Header from '../components/Header';

function Recipes() {
  const { pathname } = useLocation();

  const {
    categories,
    selectedCategory,
    toggleSelectedCategory,
    loading: categoryLoading,
  } = useCategories(pathname);

  const { data: recipes, loading } = useRecipes(pathname, selectedCategory);

  if (loading) return 'Loading...';

  return (
    <>
      <Header search title="Meals" />
      {
        categoryLoading
          ? 'Loading categories...'
          : categories.map((category) => (
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
          <div data-testid={ `${i}-recipe-card` } key={ recipe.id }>
            <img
              data-testid={ `${i}-card-img` }
              src={ recipe.thumb }
              alt={ recipe.name }
            />
            <span data-testid={ `${i}-card-name` }>{ recipe.name }</span>
          </div>
        ))
      }
    </>
  );
}

export default Recipes;
