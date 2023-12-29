import React from 'react';
import PropTypes, { shape } from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../Style/favorite.css';

function Favorites({ favorites, handleCopy, toggleFavorite, recipe }) {
  return (
    <div className="favorite-container">
      <button
        type="button"
        src={ favorites.some((el) => el.id === recipe.id)
          ? blackHeartIcon : whiteHeartIcon }
        alt="BlackHeart"
        onClick={ () => toggleFavorite(recipe) }
        className="like-button"
      >
        <img
          src={ favorites.some((el) => el.id === recipe.id)
            ? blackHeartIcon : whiteHeartIcon }
          alt="BlackHeart"
        />
      </button>

      <button
        type="button"
        onClick={ handleCopy }
        className="like-button"
      >
        <img src={ shareIcon } alt="Compartilhar" />
      </button>
      <span className="copyMessage" id="copyMessage">
        Link copied!
      </span>
    </div>
  );
}

Favorites.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(shape({})).isRequired,
  handleCopy: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default Favorites;
