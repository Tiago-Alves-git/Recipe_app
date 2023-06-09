import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import DoneRecipes from '../pages/DoneRecipes';

describe('Testes do componente <DoneRecipes />', () => {
  it('', () => {
    localStorage.setItem('doneRecipes', JSON.stringify(
      [{
        id: '52977',
        type: 'meal',
        nationality: 'Turkish',
        category: 'Side',
        name: 'Corba',
        image: 'https://www.themealdb.com//images//media//meals//58oia61564916529.jpg',
        doneDate: '05/12/2022',
        tags: ['soup'],
      }, {
        id: '15288',
        type: 'drink',
        nationality: '',
        category: 'Shot',
        alcoholicOrNot: 'Alcoholic',
        name: '252',
        image: 'https://www.thecocktaildb.com//images//media//drink//rtpxqw1468877562.jpg',
        doneDate: '05/12/2021',
        tags: [],
      }],
    ));

    renderWithRouterAndRedux(<DoneRecipes />, { initialEntries: ['/done-recipes'] });
    const filterMealsButton = screen.getByTestId('filter-by-meal-btn');
    userEvent.click(filterMealsButton);
    const filterDrinksButton = screen.getByTestId('filter-by-drink-btn');
    userEvent.click(filterDrinksButton);
    const filterAllButton = screen.getByTestId('filter-by-all-btn');
    userEvent.click(filterAllButton);
    const imagelink = screen.getByTestId('0-horizontal-image');
    userEvent.click(imagelink);
  });
});
