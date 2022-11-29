import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>

          <label htmlFor="e-mail">
            E-mail:
            <input
              type="text"
              name="email"
              id="e-mail"
              data-testid="email-input"
              onChange={ () => {} }
            />
          </label>

          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              name="senha"
              id="senha"
              data-testid="password-input"
              onChange={ () => {} }
            />
          </label>

        </form>

        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ () => {} }
        >
          Entrar
        </button>

      </div>
    );
  }
}

export default connect()(Login);
