import styled from 'styled-components';

const Container = styled.p`
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  color: #3b5998;

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
  }
`;

export default Container;
