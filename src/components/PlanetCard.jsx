import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

export default PlanetCard;