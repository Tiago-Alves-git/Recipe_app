import PropTypes from 'prop-types';
import React from 'react';
import '../Style/RecipeVideo.css';

function RecipeVideo({ recipe }) {
  if (!recipe.video) return null;
  return (
    <div>
      <iframe
        title={ recipe.title }
        width="100%"
        height="100%"
        src={ `${recipe.video}` }
        allowFullScreen
        data-testid="video"
      />
    </div>
  );
}

RecipeVideo.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};

export default RecipeVideo;
