import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import '../styles/Album.css';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      collectionName: '',
      dataAlbum: [],
      favorites: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.handleGetMusics()
      .then(
        (data) => {
          this.setState({
            dataAlbum: data,
            artistName: data[0].artistName,
            collectionName: data[0].collectionName }); // atualiza os dados da requisição, retira o loanding da tela
        },
        (error) => console.log(error),
      );
    this.setState({ isLoading: true });
    const favoriteSongs = await getFavoriteSongs();
    this.setState({ favorites: favoriteSongs });
    this.setState({ isLoading: false });
  }

  handleGetMusics = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const data = await getMusics(id);
    console.log('data 1:', data);
    return data;
  };

  handleFavorite = async ({ target }) => {
    const { dataAlbum } = this.state;
    const musicId = target.id;
    const newMusicList = dataAlbum.filter((m) => m.trackId === Number(musicId));
    const musicObj = newMusicList[0];
    this.setState({ isLoading: true });
    if (target.checked) {
      await addSong(musicObj);
      this.setState((prevState) => ({
        favorites: [...prevState.favorites, musicObj],
      }));
      const favoriteSongs = await getFavoriteSongs();
      this.setState({ favorites: favoriteSongs });
    } else {
      await removeSong(musicObj);
      const { favorites } = this.state;
      const newFavoriteSongs = favorites
        .filter((f) => f.trackId !== Number(musicObj.trackId));
      this.setState({ favorites: newFavoriteSongs });
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { artistName, collectionName, dataAlbum, isLoading, favorites, artworkUrl100 } = this.state;
    return (
      <div className="page_album" data-testid="page-album">
        <Header />
        <div className="container_musics">
          <div className="header_album">
            <div className="imgAlbumHeader">
              <img src={ artworkUrl100 } alt="foto do álbum" />
            </div>
            <div className="title_album">
              <p className="collectionNameAlbum" data-testid="album-name">
                {`
                ${collectionName}`}
              </p>
              <p className="collectionArtistAlbum" data-testid="artist-name">
                {`
                ${artistName}`}
              </p>
            </div>
          </div>
          <div className="musics_list">
            {isLoading
              ? <Loading />
              : (
                <div>
                  {dataAlbum?.filter((_e, index) => index > 0)
                    .map((e) => (
                      <MusicCard
                        key={ e.trackName }
                        trackName={ e.trackName }
                        previewUrl={ e.previewUrl }
                        trackId={ e.trackId }
                        handleFavorite={ this.handleFavorite }
                        isChecked={
                          favorites.length > 0
                            ? favorites.some((m) => m.trackId === e.trackId) : false
                        }
                      />
                    ))}
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default Album;
