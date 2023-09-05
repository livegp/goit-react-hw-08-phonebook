import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  gap: 16px;
  color: #3b5998;
  text-align: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export default Section;

export const LinkToHome = styled(Link)`
  color: #3b5998;

  &:hover {
    color: #8b9dc3;
  }
`;
