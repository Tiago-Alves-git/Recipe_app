import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../../helpers/renderWith';
import Footer from '../../components/Footer';

describe('Testes do componente <Footer />', () => {
  it('Testa se ao clicar no drinkButton, o usuário e redirecionado para a página correta', () => {
    const { history } = renderWithRouterAndRedux(<Footer />);
    const mealButton = screen.getByTestId('meals-bottom-btn');
    const drinkButton = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(drinkButton);
    expect(history.location.pathname).toBe('/drinks');
    userEvent.click(mealButton);
    expect(history.location.pathname).toBe('/meals');
  });
});
