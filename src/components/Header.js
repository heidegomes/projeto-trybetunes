import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    // const {  } = this.props;
    return (
      <header data-testid="header-component">
        <nav>
          <Link to="/search" data-testid="link-to-search">
            Pesquisa
          </Link>

          <Link to="/favorites" data-testid="link-to-favorites">
            Favoritos
          </Link>

          <Link to="/profile" data-testid="link-to-profile">
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
