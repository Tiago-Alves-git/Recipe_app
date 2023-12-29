import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Style/login.css';
import LoginForms from '../components/LoginForms';

function Login({ history }) {
  const [state, setState] = useState({
    email: '',
    senha: '',
    button: true,
  });

  const validaForm = () => {
    const { email, senha } = state;
    const number = 7;

    const emailRegex = /\S+@\S+\.\S+/;
    const validPassword = senha.length >= number;
    const result = emailRegex.test(email) && validPassword;

    setState((prevState) => ({
      ...prevState,
      button: !result,
    }));

    return !result;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validaForm();
  };

  const changePage = () => {
    const { email } = state;
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  const { email, senha, button } = state;

  return (
    <LoginForms
      email={ email }
      senha={ senha }
      button={ button }
      changePage={ changePage }
      handleInputChange={ handleInputChange }
    />
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
