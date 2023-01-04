import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    const { collectionName, collectionId, artworkUrl100, artistName } = this.props;
    return (
      <div className="card">
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <div className="imgAlbum">
            <img src={ artworkUrl100 } alt="foto do álbum" />
          </div>
          <div className="collectionName">
            { collectionName }
          </div>
          <div className="collectionArtist">
            { artistName }
          </div>
        </Link>
      </div>

    );
  }
}

Card.propTypes = {
  collectionName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};
export default Card;
