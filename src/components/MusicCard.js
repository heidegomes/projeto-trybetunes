import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Album.css';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';

class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl, trackId, isChecked, handleFavorite } = this.props;

    return (
      <div className="musics">
        <p className="nameMusic">{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <div className="favorite">
          <BsSuitHeart
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            name="isGoing"
            value="favorite"
            id={ trackId }
            onClick={ handleFavorite }
            checked={ isChecked }
          />
        </div>


      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
};
export default MusicCard;
