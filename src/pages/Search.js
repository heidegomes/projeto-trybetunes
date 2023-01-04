import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import '../styles/Search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      nameArtist: '',
      isDisabled: true,
      isLoading: false,
      data: [],
      name: '',
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

  // pesquisa o artista na API
  handleButtonClick = async () => {
    const { nameArtist } = this.state; // pega o input e atualiza o estado para fazer a requisição.
    this.setState({ isLoading: true });// mostra o loanding enquanto está fazendo a requisisição.
    const data = await searchAlbumsAPI(nameArtist); // faz requisção
    console.log(data);
    this.setState({ data, isLoading: false, name: nameArtist, nameArtist: '' }); // atualiza os dados da requisição, retira o loanding da tela
    // atualiza o nome do artista com o que foi digitado no input, limpa o campo do input
  };

  render() {
    // const { match: { params } } = this.props;
    const { name, nameArtist, isDisabled, isLoading, data } = this.state;
    return (
      <div className="Search" data-testid="page-search">
        <Header />
        { isLoading
          ? <Loading />
          : (
            <>
              <div className="boxSearch">
                <form className="formSearch">
                  <label htmlFor="Artista">
                    <input
                      data-testid="search-artist-input"
                      type="text"
                      name="nameArtist"
                      placeholder="DIGITE A SUA PESQUISA"
                      value={ nameArtist }
                      onChange={ this.onInputChange }
                      className="inputSearch"
                    />
                  </label>

                  <button
                    data-testid="search-artist-button"
                    disabled={ isDisabled }
                    onClick={ this.handleButtonClick }
                    type="button"
                    className="buttonPesquisar"
                  >
                    PESQUISAR
                  </button>
                </form>
              </div>
              <div className="resultado">
                { data && data.length > 0
                  ? (
                    <div className="container_card">
                      <p className="naoEncontrado">
                        {`Resultado de álbuns para ${name}:`}
                      </p>
                      <div className="cards">
                        {data.map((e) => (
                          <Card
                            key={ e.collectionId }
                            collectionName={ e.collectionName }
                            collectionId={ e.collectionId }
                            collectionImg={ e.artworkUrl100 }
                            artistName={ e.artistName }
                          />
                        ))}
                      </div>
                    </div>
                  )
                  : <p className="naoEncontrado">Nenhum álbum foi encontrado</p>}
              </div>
            </>
          )}
      </div>
    );
  }
}

export default Search;
