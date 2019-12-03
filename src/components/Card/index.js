import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ children, color, background, width, height }) {
  return (
    <Container
      width={width}
      height={height}
      color={color}
      background={background}
    >
      {children}
    </Container>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Card.defaultProps = {
  color: '#FFF',
  background: '',
  width: '100%',
  height: '100%',
};
