import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getDrink } from '../helpers/drinkApi';
import { getFood } from '../helpers/foodApi';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    searchType: '',
    error: false,
  };

  setSearchType = ({ target: { value } }) => {
    this.setState({ searchType: value });
  };

  setSearchTerm = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { path } = this.props;
    const { searchType, searchTerm } = this.state;
    if (searchType === 'First letter' && searchTerm.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return null;
    }
    if (path === '/drinks') {
      try {
        const drinks = await getDrink(searchTerm, searchType);
        console.log(`Resultados para ${searchTerm} e ${searchType}`, drinks);
        this.setState({ error: false });
      } catch (error) {
        this.setState({ error: true });
      }
    }
    if (path === '/meals') {
      try {
        const meals = await getFood(searchTerm, searchType);
        console.log(`Resultados para ${searchTerm} e ${searchType}`, meals);
        this.setState({ error: false });
      } catch (error) {
        console.log(error);
        this.setState({ error: true });
      }
    }
  };

  render() {
    const { searchTerm, error } = this.state;
    return (
      <Form className="search-bar" onSubmit={ this.handleSubmit }>
        <Form.Control
          type="text"
          className="mb-2"
          placeholder="Buscar Receita"
          data-testid="search-input"
          value={ searchTerm }
          onChange={ this.setSearchTerm }
        />
        {error && <h2>Não encontramos nenhuma receita</h2>}
        <div className="inline-radios mx-auto">
          <Form.Check
            inline
            data-testid="ingredient-search-radio"
            label="Ingredient"
            name="group1"
            type="radio"
            value="Ingredient"
            onChange={ this.setSearchType }
          />
          <Form.Check
            inline
            data-testid="name-search-radio"
            label="Name"
            name="group1"
            type="radio"
            value="Name"
            onChange={ this.setSearchType }
          />
          <Form.Check
            inline
            data-testid="first-letter-search-radio"
            label="First letter"
            name="group1"
            type="radio"
            value="First letter"
            onChange={ this.setSearchType }
          />
        </div>
        <Button
          type="submit"
          className="mt-2"
          variant="primary"
          data-testid="exec-search-btn"
        >
          Buscar
        </Button>
      </Form>
    );
  }
}

SearchBar.propTypes = {}.isRequired;

export default connect()(SearchBar);
