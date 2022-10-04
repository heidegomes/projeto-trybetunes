import React from 'react';
import { Link } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

class Header extends React.Component {
  render() {
    // const {  } = this.props;
    return (
      <header data-testid="header-component">
        <nav data-testid="link-to-search">
          <Link to="/Search">
            <Search />
            Pesquisa
          </Link>
        </nav>
        <nav data-testid="link-to-favorites">
          <Link to="/Favorites">
            <Favorites />
            Favoritos
          </Link>
        </nav>
        <nav data-testid="link-to-profile">
          <Link to="/Profile">
            <Profile />
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
