import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      nameArtist: '',
      isDisabled: true,
    };
  }

  // Pega o valor digitado no input Artista e chama a função que valida o botão.
  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateInputLogin());
  };

  // habilita o botão Pesquisar, somente se o artista digitado tiver mais de 2 caracteres
  validateInputLogin = () => {
    const { nameArtist } = this.state;
    const characMin = 2;
    if (nameArtist.length >= characMin) {
      this.setState({ isDisabled: false });
    }
  };

  // // salva o nome do artista
  // handleButtonClick = async () => {
  //   const { nameArtist } = this.state;
  //   this.setState({ nameArtist });
  // //   const { history } = this.props;
  // //   await createUser({ name: nameArtist });
  // //   history.push('/search');
  // };

  render() {
    const { nameArtist, isDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="Artista">
            <input
              data-testid="search-artist-input"
              type="text"
              name="nameArtist"
              placeholder="Artista"
              value={ nameArtist }
              onChange={ this.onInputChange }
            />
          </label>

          <button
            data-testid="search-artist-button"
            disabled={ isDisabled }
            // onClick={ this.handleButtonClick }
            type="button"
          >
            Pesquisar
          </button>
        </form>
      </div>

    );
  }
}

export default Search;
