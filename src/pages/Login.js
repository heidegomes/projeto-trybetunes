import React from 'react';
// import PropTypes from 'prop-types';
// import './Card.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateInputLogin());
  };

  validateInputLogin = () => {
    const { loginUser } = this.state;
    const lengthMin = 3;
    if (loginUser.length >= lengthMin) this.setState({ isDisabled: false });
  };

  handleButtonClick = () => {
    const { loginUser } = this.state;
    createUser({ name: loginUser });
  };

  render() {
    const { loginUser, isDisabled, isLoading } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="name">
            <input
              data-testid="login-name-input"
              type="text"
              name="LoginUser"
              id="input__login"
              value={ loginUser }
              onChange={ this.handleInputChange }
            />
          </label>
          <button
            data-testid="save-button"
            disabled={ isDisabled }
            onClick={ this.handleButtonClick }
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {

};
export default Login;
