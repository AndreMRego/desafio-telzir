import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled(Select)`
  margin-bottom: 10px;
  width: 100%;

  .react-select__control {
    border: 1px solid #2c96ff;
    background: transparent;
    min-height: 50px;
  }

  .react-select__value-container {
    outline: initial !important;

    background: transparent;
  }

  .react-select__indicator-separator {
    display: none;
  }
`;
