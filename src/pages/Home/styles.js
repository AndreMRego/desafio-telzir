import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

import { breakpoints } from '~/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > input {
    height: 50px;
    border: 1px solid #2c96ff;
    padding: 0 15px;
    border-radius: 4px;
    color: #727272;
    margin: 0 0 10px;
    width: 100%;

    &::placeholder {
      opacity: 0.5;
      color: #727272;
    }

    &:focus {
      border-color: #f28305;
    }
  }

  h4 {
    color: #666;
  }

  span {
    color: #fb6f91;

    margin: 0 0 10px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-left: 0 !important;
    align-items: center;

    h4 {
      font-size: 1.5rem;
    }

    span {
      font-size: 2rem;
    }
  }

  && + && {
    margin-left: 40px;
  }
`;
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 10px 0 20px;
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    max-width: ${breakpoints.xs};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 40px;

  > img {
    width: 50%;
    height: 324px;
    border: 0;
    border-radius: 5px;
  }

  @media (max-width: ${breakpoints.lg}) {
    flex-wrap: wrap;
    justify-content: center;

    > img {
      width: 100% !important;
      height: 400px;
      margin-bottom: 20px;
    }
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  padding-left: 40px;

  > h2 {
    font-size: 36px;
    line-height: 46px;
  }

  > span {
    color: #757575;
    line-height: 26px;
  }

  @media (max-width: ${breakpoints.lg}) {
    align-items: center;
    padding-left: 0 !important;
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;

  h2 {
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 32px;

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    height: 200px;
  }

  @media (max-width: ${breakpoints.xs}) {
    flex-direction: column;
    height: 400px;
    align-items: center;
  }
`;

export const SimulationWrapper = styled.div`
  margin: 50px 0;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 50px 0;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;
