import PropTypes from 'prop-types';
import '../Style/ButtonCategory.css';

function CategoryButton({ Categorys, toggleSelectedCategory, selectedCategory }) {
  console.log(Categorys);
  return (
    <div className="category-container">
      { Categorys.map((category) => (
        <button
          type="button"
          key={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          className={
            `category-btn ${selectedCategory === category.strCategory ? 'selected' : ''}`
          }
          onClick={ () => toggleSelectedCategory(category.strCategory) }
        >
          { category.strCategory }
        </button>
      )) }
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => toggleSelectedCategory() }
        className="category-btn"
      >
        All
      </button>
    </div>
  );
}

CategoryButton.propTypes = {
  Categorys: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedCategory: PropTypes.string,
  toggleSelectedCategory: PropTypes.func.isRequired,
};

CategoryButton.defaultProps = {
  selectedCategory: '',
};

export default CategoryButton;
