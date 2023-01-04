import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';
import '../styles/Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loginUser: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    getUser()
      .then(
        (result) => {
          // console.log('result login user: ', result);
          this.setState({
            isLoading: true,
            loginUser: result.name,
          });
        },
        (error) => {
          this.setState({
            isLoading: true,
          });
          console.log(error);
        },
      );
  }

  render() {
    const { isLoading, loginUser } = this.state;
    return (
      <div className="containerHeader">
        <header className="header" data-testid="header-component">
          <img
            className="logoHeader"
            src="/logo.jpg"
            alt="logo"
            width="187.19px"
            height="104.89px"
          />
          &nbsp;
          <nav className="menu">
            <Link to="/search" data-testid="link-to-search">
              Pesquisa
            </Link>
            &nbsp;
            <Link to="/favorites" data-testid="link-to-favorites">
              Favoritos
            </Link>
            &nbsp;
            <Link to="/profile" data-testid="link-to-profile">
              Perfil
            </Link>
          </nav>
          &nbsp;
          { !isLoading
            ? <Loading />
            : (
              <div className="nameLogin" data-testid="header-user-name">
                { loginUser }
              </div>
            )}
        </header>
      </div>
    );
  }
}

export default Header;
