import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useRecipes from '../hooks/useRecipes';
import useCategories from '../hooks/useCategories';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Recipes() {
  const { pathname } = useLocation();
  const {
    categories,
    selectedCategory,
    toggleSelectedCategory,
  } = useCategories(pathname);

  const { data: recipes } = useRecipes(pathname, selectedCategory);
  const isToogle = useSelector((state) => state.recipesReducer.isToogle);

  return (
    <>
      <Header search title={ pathname === '/meals' ? 'Meals' : 'Drinks' } />
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
      { !isToogle && recipes.map((recipe, i) => (
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
      ))}
      <Footer />
    </>
  );
}

export default Recipes;
