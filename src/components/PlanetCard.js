import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">
        {planetName}
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </p>
    </div>
  );
}
PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};
PlanetCard.defaultProps = {
  planetName: 'Terra',
  planetImage: '.././images/Terra.png',
};

export default PlanetCard;
