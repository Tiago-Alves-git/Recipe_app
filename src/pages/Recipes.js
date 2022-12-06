import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useRecipes from '../hooks/useRecipes';
import useCategories from '../hooks/useCategories';
import useBasePath from '../hooks/useBasePath';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Recipes.css';

function Recipes() {
  const basePath = useBasePath();
  const {
    categories,
    selectedCategory,
    toggleSelectedCategory,
  } = useCategories(basePath);

  const { data: recipes } = useRecipes(basePath, selectedCategory);
  const isToogle = useSelector((state) => state.recipesReducer.isToogle);

  return (
    <>
      <Header search title={ basePath === 'meals' ? 'Meals' : 'Drinks' } />
      <div className="category-button--list">
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
      </div>
      <div className="cards">
        { !isToogle && recipes.map((recipe, i) => (
          <div
            className="card"
            key={ recipe.id }
            data-testid={ `${i}-recipe-card` }
          >
            <Link
              to={ `/${basePath}/${recipe.id}` }
            >
              <img
                className="card-img-top"
                data-testid={ `${i}-card-img` }
                src={ recipe.thumb }
                alt={ recipe.name }
              />
            </Link>

            <div className="card-body">
              <span data-testid={ `${i}-card-name` } className="card-title">
                { recipe.name }
              </span>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Recipes;
