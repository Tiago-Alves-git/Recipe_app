import { useState, useCallback, useEffect } from 'react';

const MAX_CAT = 5;

const endpoint = (type) => {
  if (type === 'meals') return 'https://www.themealdb.com/api/json/v1/1';

  return 'https://www.thecocktaildb.com/api/json/v1/1';
};

const useCategories = (type) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategories] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const toggleSelectedCategory = (category) => {
    if (selectedCategory === category) return setSelectedCategories();

    return setSelectedCategories(category);
  };

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await (await fetch(`${endpoint(type)}/list.php?c=list`)).json();
      setCategories(res[type].slice(0, MAX_CAT));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    categories,
    selectedCategory,
    error,
    loading,
    toggleSelectedCategory,
  };
};

export default useCategories;
