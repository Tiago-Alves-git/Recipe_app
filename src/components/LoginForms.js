import PropTypes from 'prop-types';
import React from 'react';

function LoginForms({ email, senha, button, changePage, handleInputChange }) {
  return (
    <div className="loginForms">
      <form>
        <label htmlFor="e-mail">
          E-mail:
          <input
            type="text"
            name="email"
            id="e-mail"
            data-testid="email-input"
            onChange={ (event) => handleInputChange(event) }
            value={ email }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            name="senha"
            id="senha"
            data-testid="password-input"
            onChange={ (event) => handleInputChange(event) }
            value={ senha }
          />
        </label>
      </form>
      <button
        type="button"
        disabled={ button }
        data-testid="login-submit-btn"
        onClick={ () => changePage() }
      >
        Entrar
      </button>
    </div>
  );
}

LoginForms.propTypes = {
  button: PropTypes.any,
  changePage: PropTypes.any,
  email: PropTypes.any,
  handleInputChange: PropTypes.any,
  senha: PropTypes.any,
}.isRequired;

export default LoginForms;
