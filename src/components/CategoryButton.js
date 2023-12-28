import PropTypes from 'prop-types';

function CategoryButton({ Categorys, toggleSelectedCategory, selectedCategory }) {
  return (
    <div>
      { Categorys.map((category) => (
        <button
          type="button"
          key={ category.strCategory }
          data-testid={ `${category.strCategory}-category-filter` }
          className={
            `${selectedCategory === category.strCategory ? 'selected' : ''}`
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
      >
        All
      </button>
    </div>
  );
}

CategoryButton.propTypes = {
  Categorys: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  toggleSelectedCategory: PropTypes.func.isRequired,
};

export default CategoryButton;
