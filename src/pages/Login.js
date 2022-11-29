import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      button: true,
    };
  }

  handleInputChange = (event) => {
    const { name } = event.target;
    const { target } = event;
    const { value } = target;
    this.setState({
      [name]: value,
    }, this.validaForm);
  };

  validaForm = () => {
    const { email, senha } = this.state;
    const number = 7;

    const emailRegex = /\S+@\S+\.\S+/;
    const validPassword = senha.length >= number;
    const result = emailRegex.test(email) && validPassword;

    this.setState({
      button: !result,
    });
    return !result;
  };

  render() {
    const { email, senha, button } = this.state;
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
              onChange={ this.handleInputChange }
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
              onChange={ this.handleInputChange }
              value={ senha }
            />
          </label>

        </form>

        <button
          type="button"
          disabled={ button }
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
