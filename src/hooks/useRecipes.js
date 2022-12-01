import { useState, useCallback, useEffect } from 'react';

const MAX_RECIPES = 12;

const endpoint = (type, filter) => {
  let url = 'https://www.thecocktaildb.com/api/json/v1/1';
  if (type === 'meals') url = 'https://www.themealdb.com/api/json/v1/1';

  if (filter) url = `${url}/filter.php?c=${filter}`;
  else url = `${url}/search.php?s=`;

  return url;
};

const mapToSameAPI = (type) => (data) => {
  if (type === 'meals') {
    return {
      id: data.idMeal,
      thumb: data.strMealThumb,
      name: data.strMeal,
    };
  }

  return {
    id: data.idDrink,
    thumb: data.strDrinkThumb,
    name: data.strDrink,
  };
};

const useRecipes = (type, filter) => {
  type = type.slice(1);

  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await (await fetch(endpoint(type, filter))).json();
      setData(res[type].slice(0, MAX_RECIPES).map(mapToSameAPI(type)));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [type, filter]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    error,
    loading,
  };
};

export default useRecipes;
