import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

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
          console.log('result: ', result);
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
      <header data-testid="header-component">
        <nav>
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
          { !isLoading
            ? <Loading />
            : (
              <div data-testid="header-user-name">
                { loginUser }
              </div>
            )}
        </nav>
      </header>
    );
  }
}

export default Header;
