import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtonRecipeStatus from '../components/ButtonRecipeStatus';
import Recommendations from '../components/Recommendations';
import useBasePath from '../hooks/useBasePath';
import useRecipe from '../hooks/useRecipe';
import '../Style/RecipeDetails.css';
import { getDrinksForRecommendation } from '../helpers/drinkApi';
import { getMealsForRecommendation } from '../helpers/foodApi';
import Header from '../components/Header';
import CardDetails from '../components/CardDetails';
import Favorites from '../components/Favorites';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeVideo from '../components/RecipeVideo';

const copy = require('clipboard-copy');

function RecipeDetails(props) {
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

  const getRecomentadion = useCallback(async () => {
    const data = basePath === 'meals'
      ? await getDrinksForRecommendation()
      : await getMealsForRecommendation();
    setRecommendations(data);
  }, [basePath]);

  useEffect(() => {
    getRecomentadion();
  }, [getRecomentadion]);

  const handleCopy = async () => {
    const THREESECONDS = 3000;
    const { location } = props;
    const { pathname } = location;
    document.getElementById('copyMessage').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('copyMessage').style.display = 'none';
    }, THREESECONDS);
    copy(`http://localhost:3000${pathname}`);
  };

  if (loading) return 'Loading...';

  return (
    <>
      <Header search title={ basePath === 'meals' ? 'Meals' : 'Drinks' } />
      <div className="Recipe-Details-Container">
        <div className="wrap-details-ingredients">
          <CardDetails
            recipe={ recipe }
            basePath={ basePath }
          />
          <RecipeIngredients recipe={ recipe } />
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
        <ButtonRecipeStatus type={ basePath } id={ recipe.id } />
      </div>
    </>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}.isRequired;

export default RecipeDetails;
