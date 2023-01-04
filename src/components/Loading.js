import React from 'react';
// import PropTypes from 'prop-types';
// import './Card.css';

class Loading extends React.Component {
  render() {
    // const {  } = this.props;
    return (
      <div className="carregando" data-testid="page-album">
        Carregando...
      </div>
    );
  }
}

Loading.propTypes = {

};
export default Loading;
