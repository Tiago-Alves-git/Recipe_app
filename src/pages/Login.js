import PropTypes from 'prop-types';
import '../Style/login.css';
import React from 'react';
import { connect } from 'react-redux';
import { actionLogin } from '../redux/actions';

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

  changePage = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(actionLogin(email));
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  render() {
    const { email, senha, button } = this.state;
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
