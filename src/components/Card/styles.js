import styled from 'styled-components';
import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.background};
  align-items: center;
  justify-content: space-around;

  width: ${props => props.width};
  height: ${props => props.height};
  margin: 0 10px;
  border: 0;
  border-radius: 4px;

  svg {
    margin-right: 5px;
  }

  h3 {
    font-size: 1rem;
    line-height: 34px;
  }

  > span {
    color: ${props => props.color};
    font-size: 1.4rem;
    line-height: 42px;
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-bottom: 20px;
  }
`;
