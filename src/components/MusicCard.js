import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl, trackId, isChecked, handleFavorite } = this.props;

    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor="Favorita">
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            name="isGoing"
            value="favorite"
            id={ trackId }
            onChange={ handleFavorite }
            checked={ isChecked }
          />
        </label>
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
