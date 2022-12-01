import React from 'react';

function DrinkCard(props) {
  const { recipe, index } = props;
  const { strDrinkThumb, strDrink } = recipe;
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      className="recipeCard"
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <h3
        data-testid={ `${index}-card-name` }
      >
        {strDrink}
      </h3>
    </div>
  );
}

DrinkCard.propTypes = {}.isRequired;
export default DrinkCard;
