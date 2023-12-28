import PropTypes from 'prop-types';
import '../Style/login.css';
import React from 'react';
import { connect } from 'react-redux';
import LoginForms from '../components/LoginForms';

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
    console.log(event);
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
    const { history } = this.props;
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  render() {
    const { email, senha, button } = this.state;
    return (
      <LoginForms
        email={ email }
        senha={ senha }
        button={ button }
        changePage={ this.changePage }
        handleInputChange={ this.handleInputChange }
      />
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
