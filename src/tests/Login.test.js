import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../helpers/renderWith';
import App from '../App';

describe('Testes do componente <Login />', () => {
  const testIdEmail = 'email-input';
  const testIdSenha = 'password-input';
  const testIdButton = 'login-submit-btn'
  it('Testa se os inputs são exibidos na tela', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByTestId(testIdEmail)).toBeInTheDocument();
    expect(screen.getByTestId(testIdSenha)).toBeInTheDocument();
  });
  it('Testa se o botão é exibido na tela', () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByTestId(testIdButton)).toBeInTheDocument();
  });
  it('Testa de o botão é ativado após o preenchimento dos correto dos campos', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdSenha);
    userEvent.type(inputEmail, 'email@teste.com');
    userEvent.type(inputPassword, '1234567');
    expect(screen.getByTestId(testIdButton)).not.toBeDisabled();
  });
  it('Testa se ao clicar no botão, o usuário é redirecionado para outra página', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdSenha);
    userEvent.type(inputEmail, 'email@teste.com');
    userEvent.type(inputPassword, '1234567');
    const button = screen.getByTestId(testIdButton);
    userEvent.click(button);
    expect(history.location.pathname).toBe('/meals');
  });
});
