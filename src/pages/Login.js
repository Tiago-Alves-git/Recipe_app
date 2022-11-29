import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionLogin } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emaiL: '',
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
    const { emaiL, senha } = this.state;
    const number = 7;

    const emailRegex = /\S+@\S+\.\S+/;
    const validPassword = senha.length >= number;
    const result = emailRegex.test(emaiL) && validPassword;

    this.setState({
      button: !result,
    });
    return !result;
  };

  changePage = () => {
    const { emaiL } = this.state;
    const { history, dispatch } = this.props;
    dispatch(actionLogin(emaiL));
    localStorage.setItem('user', JSON.stringify({ email: emaiL }));
    history.push('/meals');
  };

  render() {
    const { emaiL, senha, button } = this.state;
    return (
      <div>
        <form>

          <label htmlFor="e-mail">
            E-mail:
            <input
              type="text"
              name="emaiL"
              id="e-mail"
              data-testid="email-input"
              onChange={ this.handleInputChange }
              value={ emaiL }
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
          onClick={ this.changePage }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
