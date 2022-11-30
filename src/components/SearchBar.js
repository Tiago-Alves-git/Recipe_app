import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    searchType: '',
  };

  setSearchType = ({ target: { value } }) => {
    this.setState({ searchType: value });
  };

  setSearchTerm = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { searchType, searchTerm } = this.state;
    console.log(history);
    if (searchType === 'Primeira Letra' && searchTerm.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else return null;
  };

  render() {
    const { history } = this.props;
    console.log(history);
    const { searchTerm } = this.state;
    return (
      <Form
        className="search-bar"
        onSubmit={ this.handleSubmit }
      >
        <Form.Control
          type="text"
          className="mb-2"
          placeholder="Buscar Receita"
          data-testid="search-input"
          value={ searchTerm }
          onChange={ this.setSearchTerm }
        />
        <div className="inline-radios mx-auto">
          <Form.Check
            inline
            data-testid="ingredient-search-radio"
            label="Ingrediente"
            name="group1"
            type="radio"
            value="Ingrediente"
            onChange={ this.setSearchType }
          />
          <Form.Check
            inline
            data-testid="name-search-radio"
            label="Nome"
            name="group1"
            type="radio"
            value="Nome"
            onChange={ this.setSearchType }
          />
          <Form.Check
            inline
            data-testid="first-letter-search-radio"
            label="Primeira Letra"
            name="group1"
            type="radio"
            value="Primeira Letra"
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

export default connect()(SearchBar);
