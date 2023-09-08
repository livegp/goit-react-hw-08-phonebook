import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginLink = styled(Link)`
  order: 6;
  margin-top: 0;
  background: transparent;
  border-width: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: #dfe3ee;
  }

  &:hover {
    svg {
      stroke: #f7f7f7;
    }
  }
`;

export default LoginLink;
