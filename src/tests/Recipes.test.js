import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('Testa se o filtro Beef funciona', async () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/meals'] });
    const filterBeef = await screen.findByTestId('Beef-category-filter');
    userEvent.click(filterBeef);
  });

  it('Testa se o filtro de all funciona', async () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/meals'] });
    const filterAll = await screen.findByTestId('All-category-filter');
    userEvent.click(filterAll);
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

  it('Testa se o filtro de catedorias funciona', async () => {
    renderWithRouterAndRedux(<Recipes />, { initialEntries: ['/drinks'] });
    const filterShake = await screen.findByTestId('Shake-category-filter');
    userEvent.click(filterShake);
  });
});
