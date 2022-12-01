import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import fetch from '../../cypress/mocks/fetch';
import Recipes from '../pages/Recipes';

describe('Testes da pagina <Recipes /> na rota /meals', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(fetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Testa se a api foi chamada no mount', () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/meals'] });

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  });

  it('Testa se existe 12 cards', async () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/meals'] });

    expect(await screen.findAllByTestId(/-recipe-card/)).toHaveLength(12);
  });

  it('Testa se a api de categorias foi chamada no mount', () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/meals'] });

    expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  });

  it('Testa se existe 5 buttons de categoria', async () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/meals'] });

    expect(await screen.findAllByTestId(/-category-filter/)).toHaveLength(5);
  });
});

describe('Testes da pagina <Recipes /> na rota /drinks', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(fetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('Testa se a api foi chamada no mount', () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/drinks'] });

    expect(global.fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  });

  it('Testa se existe 12 cards', async () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/drinks'] });

    expect(await screen.findAllByTestId(/-recipe-card/)).toHaveLength(12);
  });

  it('Testa se a api de categorias foi chamada no mount', () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/drinks'] });

    expect(global.fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  });

  it('Testa se existe 5 buttons de categoria', async () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/drinks'] });

    expect(await screen.findAllByTestId(/-category-filter/)).toHaveLength(5);
  });
});
