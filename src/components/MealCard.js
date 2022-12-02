import React from 'react';

function MealCard(props) {
  const { recipe, index } = props;
  const { strMealThumb, strMeal } = recipe;
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      className="recipeCard"
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ strMealThumb }
        alt={ strMeal }
      />
      <h3
        data-testid={ `${index}-card-name` }
      >
        {strMeal}
      </h3>
    </div>
  );
}

MealCard.propTypes = {}.isRequired;
export default MealCard;
