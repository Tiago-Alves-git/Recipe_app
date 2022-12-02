import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { foodID } from '../helpers/foodApi';
import { drinkID } from '../helpers/drinkApi';
import ButtonStartRecipe from './ButtonStartRecipe';

export default function RecipeDetails({ value }) {
  const history = useHistory();
  console.log(history);
  const location = history.location.pathname;
  console.log(location);
  const id = location.split('/')[2];
  console.log(id);

  const fetchId = async () => {
    if (value === 'meals') {
      const food = await foodID(id);
      console.log(food);
    } if (value === 'drinks') {
      const drinks = await drinkID(id);
      console.log(drinks);
    }
  };

  useEffect(() => {
    fetchId();
  });

  return (
    <>
      <div>RecipeDetails</div>
      <ButtonStartRecipe />
    </>
  );
}

RecipeDetails.propTypes = {}.isRequired;
