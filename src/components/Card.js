import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './Card.css';

class Card extends React.Component {
  render() {
    const { collectionName, collectionId } = this.props;
    return (
      <div>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          { collectionName }
        </Link>
      </div>

    );
  }
}

Card.propTypes = {
  collectionName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
export default Card;
