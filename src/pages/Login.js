import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginUser: '',
      isDisabled: true,
      isLoading: false,
    };
  }

  // Pega o valor digitado no input name e chama a função que valida o botão.
  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateInputLogin());
  };

  // habilita o botão Entrar, somente se  o nome digitado tiver mais de 3 caracteres
  validateInputLogin = () => {
    const { loginUser } = this.state;
    const characMin = 3;
    if (loginUser.length >= characMin) {
      this.setState({ isDisabled: false });
    }
  };

  // salva o nome
  handleButtonClick = async () => {
    const { loginUser } = this.state;
    const { history } = this.props;
    this.setState({ isLoading: true });
    await createUser({ name: loginUser });
    history.push('/search');
  };

  render() {
    const { loginUser, isDisabled, isLoading } = this.state;
    return (
      <div data-testid="page-login">
        { isLoading
          ? <Loading />
          : (
            <form>
              <label htmlFor="name">
                <input
                  data-testid="login-name-input"
                  type="text"
                  name="loginUser"
                  id="input__login"
                  value={ loginUser }
                  onChange={ this.onInputChange }
                />
              </label>
              <button
                data-testid="login-submit-button"
                disabled={ isDisabled }
                onClick={ this.handleButtonClick }
                type="button"
              >
                Entrar
              </button>
            </form>
          )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default Login;
