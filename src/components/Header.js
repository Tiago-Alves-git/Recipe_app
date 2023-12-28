import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import IconProfile from '../images/profileIcon.svg';
import IconSearch from '../images/searchIcon.svg';
import PageIcon from './PageIcon';
import SearchBar from './SearchBar';

import '../Style/Header.css';

function Header(props) {
  const { title } = props;
  const [searchOpen, setSearchOpen] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setSearchOpen((prev) => !prev);
    dispatch(actionSearch(!searchOpen));
  }

  return (
    <header>
      <div className="logo-left">
        <span>
          Recipes
          <b>APP</b>
        </span>
      </div>
      <div className="title">
        <PageIcon title={ title } />
        <span data-testid="page-title">{ title }</span>
      </div>
      {
        searchOpen && (<SearchBar />)
      }
      <div className="icons-right">
        <button
          type="button"
          onClick={ handleClick }
          className="iconSearch"
        >
          <img
            src={ IconSearch }
            alt="search"
          />
        </button>
        <Link to="/profile">
          <img
            src={ IconProfile }
            alt="profile"
            className="iconSearch"
          />
        </Link>
      </div>
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
