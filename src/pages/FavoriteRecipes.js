import clipboardCopy from 'clipboard-copy';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../Style/index.css';

function FavoriteRecipes() {
  const [favoriteRecipes, setfavoriteRecipes] = useState([]);
  const [copied, setCopied] = useState(false);

  const recipesStorage = localStorage.getItem('favoriteRecipes');

  const recipes = recipesStorage ? JSON.parse(recipesStorage) : [];

  useEffect(() => {
    const recipesInit = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setfavoriteRecipes(
      recipesInit || [],
    );
  }, []);

  const filterMeals = () => {
    const filteredMeals = recipes.filter((e) => e.type === 'meal');
    setfavoriteRecipes(filteredMeals);
  };

  const filterDrinks = () => {
    const filteredMeals = recipes.filter((e) => e.type === 'drink');
    setfavoriteRecipes(filteredMeals);
  };

  const filterAll = () => {
    setfavoriteRecipes(recipes || []);
  };

  const shareRecipe = (id, type) => {
    const two = 2000;
    const link = `http://localhost:3000/${type}s/${id}`;
    clipboardCopy(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, two);
  };

  const desfavoritar = (id) => {
    const filter = recipes.filter((e) => e.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filter));
    setfavoriteRecipes(filter);
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
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
        onClick={ filterDrinks }
        className="category-btn"
      >
        Drinks

      </button>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ filterAll }
        className="category-btn"
      >
        All

      </button>
      {
        copied === true ? <p className="copyMessage">Link copied!</p> : ''
      }
      { favoriteRecipes.length > 0
        ? favoriteRecipes.map((recipe, i) => (
          <div
            key={ recipe.id }
            className="card"
          >
            <button
              type="button"
              data-testid={ `${i}-horizontal-share-btn` }
              src={ shareIcon }
              onClick={ () => { shareRecipe(recipe.id, recipe.type); } }
            >
              <img src={ shareIcon } alt="compartilhar" />
            </button>

            <button
              type="button"
              data-testid={ `${i}-horizontal-favorite-btn` }
              src={ blackHeartIcon }
              onClick={ () => { desfavoritar(recipe.id); } }
            >
              <img src={ blackHeartIcon } alt="desfavoritar" />
            </button>

            <Link
              to={ `/${recipe.type}s/${recipe.id}` }
            >
              <img
                data-testid={ `${i}-horizontal-image` }
                className="card-img"
                src={ recipe.image }
                alt={ recipe.name }
              />
              <span data-testid={ `${i}-horizontal-name` }>{ recipe.name }</span>
            </Link>
            {/* {recipe.tags.slice(0, 2).map((tag) => (
              <span
                key={ tag }
                data-testid={ `0-${tag}-horizontal-tag` }
              >
                { tag }
              </span>
            ))} */}

            {recipe.type === 'meal'
              ? (
                <span
                  data-testid={ `${i}-horizontal-top-text` }
                >
                  { `${recipe.nationality} - ${recipe.category}` }

                </span>
              )
              : (
                <span
                  data-testid={ `${i}-horizontal-top-text` }
                >
                  { recipe.alcoholicOrNot }
                </span>
              ) }
            <span data-testid={ `${i}-horizontal-done-date` }>{ recipe.doneDate }</span>
          </div>
        )) : (
          <span className="NotFavorite">
            Não há receitas adicionadas aos favoritos
          </span>
        )}
    </div>
  );
}

export default FavoriteRecipes;
