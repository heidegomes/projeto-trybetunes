import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
// import './Card.css';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      collectionName: '',
      dataAlbum: [],
    };
  }

  componentDidMount() {
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
  }

  handleGetMusics = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const data = await getMusics(id);
    console.log('data 1:', data);
    return data;
  };

  render() {
    const { artistName, collectionName, dataAlbum } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="artist-name">
          {`Artista:
          ${artistName}`}
        </p>
        <p data-testid="album-name">
          {`Álbum:
          ${collectionName}`}
        </p>
        <div>
          {dataAlbum?.filter((_e, index) => index > 0)
            .map((e) => (
              <MusicCard
                key={ e.trackName }
                trackName={ e.trackName }
                previewUrl={ e.previewUrl }
                // trackId={ e.trackId }
              />
            ))}
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
