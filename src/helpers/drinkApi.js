const getDrinkByIngredient = async (term) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`,
  );
  const { drinks } = await response.json();
  return drinks;
};

const getDrinkByName = async (term) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`,
  );
  const { drinks } = await response.json();
  return drinks;
};

const getDrinkByFirstLetter = async (term) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${term}`,
  );
  const { drinks } = await response.json();
  return drinks;
};

export const getDrinkByFilter = async (term) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${term}`,
  );
  const { drinks } = await response.json();
  return drinks;
};

export const getDrink = (term, type) => {
  switch (type) {
  case 'First letter':
    return getDrinkByFirstLetter(term);
  case 'Name':
    return getDrinkByName(term);
  case 'Ingredient':
    return getDrinkByIngredient(term);
  default:
    return null;
  }
};
