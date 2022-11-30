import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../../helpers/renderWith';
import Header from '../../components/Header';

const SEARCH_B = 'search-top-btn';

describe('Testes do componente <Header />', () => {
  it('Testa se o title esta correto', () => {
    renderWithRouterAndRedux(<Header title="Meals" search />);

    expect(screen.getByTestId('page-title')).toHaveTextContent('Meals');
  });

  it('Testa se o search aparece em paginas que usam search', () => {
    renderWithRouterAndRedux(<Header title="Meals" search />);

    expect(screen.getByTestId(SEARCH_B)).toBeInTheDocument();
  });

  it('Testa se o search não aparece em certas paginas', () => {
    renderWithRouterAndRedux(<Header title="Profile" />);

    expect(screen.queryByTestId(SEARCH_B)).not.toBeInTheDocument();
  });

  it('Testa se profile vai para a pagina de profile ao ser clicado', () => {
    const { history } = renderWithRouterAndRedux(<Header title="Meals" search />);

    userEvent.click(screen.getByTestId('profile-top-btn'));

    expect(history.location.pathname).toBe('/profile');
  });
});
