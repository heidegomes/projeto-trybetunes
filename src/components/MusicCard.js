import React from 'react';
import PropTypes from 'prop-types';
// import './Card.css';

class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        {/* <input type="checkbox" data-testid={`checkbox-music-${trackId}`} name="favorite" value="favorite">
        <label for="Favorita"></label> */}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};
export default MusicCard;
