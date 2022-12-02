import { useState, useCallback, useEffect } from 'react';

const endpoint = (type, id) => {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  if (type === 'meals') url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  return url;
};

const mapToSameAPI = (type, data) => {
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

const useRecipe = (type, id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      if (!id) throw Exception('recipe needs an id!');
      const res = await (await fetch(endpoint(type, id))).json();
      setData(mapToSameAPI(type, res[type][0]));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [type, id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    error,
    loading,
  };
};

export default useRecipe;
