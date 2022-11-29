import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import App from '../App';

describe('Testes do componente <Login />', () => {
  it('Testa se os inputs são exibidos na tela', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });
  it('Testa se o botão é exibido na tela', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByTestId('login-submit-btn')).toBeInTheDocument();
  });
  it('Testa de o botão é ativado após o preenchimento dos correto dos campos', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputEmail, 'email@teste.com');
    userEvent.type(inputPassword, '1234567');
    expect(screen.getByTestId('login-submit-btn')).not.toBeDisabled();
  });
});
