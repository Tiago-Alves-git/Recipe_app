import useRecipes from '../hooks/useRecipes';
import useCategories from '../hooks/useCategories';
import useBasePath from '../hooks/useBasePath';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../Style/Recipes.css';
import CategoryButton from '../components/CategoryButton';
import RecipeCards from '../components/RecipeCards';

function Recipes() {
  const basePath = useBasePath();
  const {
    categories,
    selectedCategory,
    toggleSelectedCategory,
  } = useCategories(basePath);

  const { data: recipes } = useRecipes(basePath, selectedCategory);

  return (
    <>
      <Header search title={ basePath === 'meals' ? 'Meals' : 'Drinks' } />
      <CategoryButton
        Categorys={ categories }
        toggleSelectedCategory={ toggleSelectedCategory }
        selectedCategory={ selectedCategory }
      />
      <RecipeCards Recipes={ recipes } />
      <Footer />
    </>
  );
}

export default Recipes;
