import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Recommendations from '../components/Recommendations';
import useBasePath from '../hooks/useBasePath';
import useRecipe from '../hooks/useRecipe';
import '../Style/RecipeDetails.css';
import { getDrinksForRecommendation } from '../helpers/drinkApi';
import { getMealsForRecommendation } from '../helpers/foodApi';
import Header from '../components/Header';
import CardDetails from '../components/CardDetails';
import Favorites from '../components/Favorites';
import RecipeVideo from '../components/RecipeVideo';
import ButtonFinishRecipe from '../components/ButtonFinishRecipe';
import RecipeIngredientInProgress from '../components/RecipeIngredientsInProgress';

const copy = require('clipboard-copy');

function RecipeInProgress() {
  const history = useHistory();
  const basePath = useBasePath();
  const { id } = useParams();
  const [favoritesState, setFavorites] = useState([]);

  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const isFavorite = favorites.length > 0
    && favorites.find((favorite) => favorite.id === id);

  const toggleFavorite = (favorite) => {
    if (!isFavorite) {
      const newfavorites = [...favorites, {
        id: favorite.id,
        type: favorite.type,
        nationality: favorite.nationality || '',
        category: favorite.category,
        alcoholicOrNot: favorite.alcoholic || '',
        name: favorite.title,
        image: favorite.photo,
      }];
      setFavorites(localStorage.setItem('favoriteRecipes', JSON.stringify(newfavorites)));
    } else {
      const filter = favorites.filter((e) => e.id !== String(id));
      localStorage.setItem('favoriteRecipes', JSON.stringify(filter));
      setFavorites([{
        ...favoritesState,
      }]);
    }
  };

  const [recommendations, setRecommendations] = useState([]);
  const { data: recipe, loading } = useRecipe(basePath, id);
  const [checkedIngredients, setCheckedIngredients] = useState(
    JSON.parse(localStorage.getItem('inProgressRecipes')) || [],
  );

  const toggleCheckedIngredient = (ingredient, measure) => {
    const found = checkedIngredients.find((ing) => ing === `${ingredient} - ${measure}`);

    if (found) {
      const newIgn = checkedIngredients.filter((ing) => ing !== found);
      setCheckedIngredients(newIgn);
      localStorage.setItem('inProgressRecipes', JSON.stringify(newIgn));
    } else {
      const newIgn = [...checkedIngredients, `${ingredient} - ${measure}`];
      setCheckedIngredients(newIgn);
      localStorage.setItem('inProgressRecipes', JSON.stringify(newIgn));
    }
  };

  const getRecomentadion = useCallback(async () => {
    const data = basePath === 'meals/in-progress'
      ? await getDrinksForRecommendation()
      : await getMealsForRecommendation();
    setRecommendations(data);
  }, [basePath]);

  useEffect(() => {
    getRecomentadion();
  }, [getRecomentadion]);

  const handleCopy = async () => {
    const THREESECONDS = 3000;
    document.getElementById('copyMessage').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('copyMessage').style.display = 'none';
    }, THREESECONDS);
    copy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
  };

  const finishRecipe = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    doneRecipes.push({
      id: recipe.id,
      type: recipe.type,
      nationality: recipe.nationality
        ? recipe.nationality : '',
      category: recipe.category,
      alcoholicOrNot: recipe.alcoholic
        ? recipe.alcoholic : '',
      tags: recipe.tags
        ? recipe.tags : '',
      name: recipe.title,
      image: recipe.photo,
      doneDate: new Date().toISOString(),
    });
    localStorage.removeItem('inProgressRecipes');
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/done-recipes');
  };

  if (loading) return 'Loading...';

  return (
    <>
      <Header search title={ basePath === 'meals/in-progress' ? 'Meals' : 'Drinks' } />
      <div className="Recipe-Details-Container">
        <div className="wrap-details-ingredients">
          <CardDetails
            recipe={ recipe }
            basePath={ basePath }
          />
          <RecipeIngredientInProgress
            recipe={ recipe }
            toggleCheckedIngredient={ toggleCheckedIngredient }
            checkedIngredients={ checkedIngredients }
          />
        </div>
        <Favorites
          favorites={ favorites }
          handleCopy={ handleCopy }
          toggleFavorite={ toggleFavorite }
          recipe={ recipe }
        />
        <div className="wrap-details-recomendations">
          <RecipeVideo recipe={ recipe } />
          <Recommendations recommendations={ recommendations } />
        </div>
        <ButtonFinishRecipe
          checkedIngredients={ checkedIngredients }
          recipe={ recipe }
          finishRecipe={ finishRecipe }
        />
      </div>
    </>
  );
}

RecipeInProgress.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default RecipeInProgress;
