import styled from 'styled-components';
import { breakpoints } from '~/constants';

export const Container = styled.div`
  background: #fff;
`;
export const Content = styled.div`
  height: 100px;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-width: 4px;
  border-bottom-color: #e6e6e6;

  img {
    height: 32px;
  }

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

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;
