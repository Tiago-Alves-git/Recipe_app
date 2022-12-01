import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import IconProfile from '../images/profileIcon.svg';
import IconSearch from '../images/searchIcon.svg';
import PageIcon from './PageIcon';
import SearchBar from './SearchBar';

function Header(props) {
  const { search, title } = props;
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header>
      <nav>
        <span>
          recipes
          <b>app</b>
        </span>
        {
          search
            && (
              <button
                type="button"
                onClick={ () => setSearchOpen((prev) => !prev) }
              >
                <img
                  src={ IconSearch }
                  data-testid="search-top-btn"
                  alt="search"
                />
              </button>
            )
        }
        <Link to="/profile">
          <img src={ IconProfile } alt="profile" data-testid="profile-top-btn" />
        </Link>
      </nav>
      <div>
        <PageIcon title={ title } />
        <span data-testid="page-title">{ title }</span>
      </div>
      {
        searchOpen && (<SearchBar />)
      }
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
  title: PropTypes.string,
  path: PropTypes.string,
}.isRequired;

Header.defaultProps = {
  search: false,
};

export default Header;
