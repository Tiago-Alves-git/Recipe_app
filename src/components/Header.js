import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import IconProfile from '../images/profileIcon.svg';
import IconSearch from '../images/searchIcon.svg';
import { actionSearch } from '../redux/actions';
import PageIcon from './PageIcon';
import SearchBar from './SearchBar';

import '../Style/Header.css';

function Header(props) {
  const { title, search } = props;
  const [searchOpen, setSearchOpen] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setSearchOpen((prev) => !prev);
    dispatch(actionSearch(!searchOpen));
  }

  return (
    <header>
      <nav className="header-nav">
        <span>
          Recipes
          <b>APP</b>
        </span>
        <div className="header-nav--items">
          {
            search
              && (
                <button
                  type="button"
                  onClick={ handleClick }
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
        </div>
      </nav>

      <div className="header-title--wrapper">
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
  title: PropTypes.string,
  path: PropTypes.string,
}.isRequired;

Header.defaultProps = {
  search: false,
};

export default Header;
