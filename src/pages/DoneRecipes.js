// import clipboardCopy from 'clipboard-copy';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import '../Style/favorite.css';
import '../Style/index.css';

const copy = require('clipboard-copy');

function DoneRecipes() {
  const [doneRecipes, setdoneRecipes] = useState([]);

  const recipes = JSON.parse(localStorage.getItem('doneRecipes'));

  useEffect(() => {
    const recipesInit = JSON.parse(localStorage.getItem('doneRecipes'));
    setdoneRecipes(
      recipesInit || [],
    );
  }, []);

  const filterMeals = () => {
    const filteredMeals = recipes.filter((e) => e.type === 'meal');
    setdoneRecipes(filteredMeals);
  };

  const filterDrinks = () => {
    const filteredMeals = recipes.filter((e) => e.type === 'drink');
    setdoneRecipes(filteredMeals);
  };

  const filterAll = () => {
    setdoneRecipes(recipes || []);
  };

  const handleCopy = async () => {
    const THREESECONDS = 3000;
    document.getElementById('copyMessage').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('copyMessage').style.display = 'none';
    }, THREESECONDS);
    copy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
  };

  return (
    <div>
      <Header title="Done Recipes" />
      <div className="category-container">
        <button
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ filterMeals }
          className="category-btn"
        >
          Meals

        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          className="category-btn"
          onClick={ filterDrinks }
        >
          Drinks

        </button>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          className="category-btn"
          onClick={ filterAll }
        >
          All

        </button>
      </div>
      <span className="copyMessage" id="copyMessage">
        Link copied!
      </span>
      <div className="recipe-container">
        {
          doneRecipes.map((recipe, i) => (
            <div
              key={ recipe.id }
              className="recipe-card"
            >
              <div className="DoneRecipeTopContainer">
                <span className="RecipeCard-title">{ recipe.name }</span>
                <button
                  type="button"
                  data-testid={ `${i}-horizontal-share-btn` }
                  src={ shareIcon }
                  onClick={ handleCopy }
                  className="category-btn"
                >
                  <img src={ shareIcon } alt="compartilhar" />
                </button>
              </div>
              <Link
                to={ `/${recipe.type}s/${recipe.id}` }
              >
                <img
                  data-testid={ `${i}-horizontal-image` }
                  className="RecipeCard-img"
                  src={ recipe.image }
                  alt={ recipe.name }
                />
              </Link>
              <div className="DoneRecipeBotContainer">
                {recipe.tags.slice(0, 2).map((tag) => (
                  <span
                    className="RecipeCard-category"
                    key={ tag }
                  >
                    { tag }
                  </span>
                ))}

                {recipe.type === 'meal'
                  ? (
                    <span
                      className="RecipeCard-category"
                    >
                      { `${recipe.nationality} - ${recipe.category}` }

                    </span>
                  )
                  : (
                    <span
                      className="RecipeCard-category"
                    >
                      { recipe.alcoholicOrNot }
                    </span>
                  ) }
                <span className="RecipeCard-category">{ recipe.doneDate }</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default DoneRecipes;
