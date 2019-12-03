import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({
  testid,
  color,
  children,
  width,
  type,
  onClick,
}) {
  return (
    <Container
      data-testid={testid}
      color={color}
      width={width}
      type={type}
      onClick={onClick}
    >
      <span>{children}</span>
    </Container>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  testid: PropTypes.string,
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: '#5667F9',
  testid: '',
  width: '100%',
  type: 'button',
  onClick: () => {},
};
