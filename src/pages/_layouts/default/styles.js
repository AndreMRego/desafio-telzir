import styled from 'styled-components';
import { breakpoints } from '~/constants';

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;

  @media (max-width: ${breakpoints.lg}) {
    max-width: ${breakpoints.md};
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: ${breakpoints.sm};
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: ${breakpoints.xs};
  }

  @media (max-width: ${breakpoints.xs}) {
    max-width: 360px;
  }
`;
