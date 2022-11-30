import { useState, useCallback, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const useDrinks = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await (await fetch(url)).json();
      setData(res.drinks);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    error,
    loading,
  };
};

export default useDrinks;
