import styled from 'styled-components';

const LogoStyled = styled.div`
  order: 1;
  flex-grow: 0;

  a {
    display: flex;
  }

  p {
    background-color: transparent;
    padding: 8px;
    color: #dfe3ee;
    font-size: 20px;
    font-weight: bold;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: #dfe3ee;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    p,
    svg {
      fill: #f7f7f7;
      color: #f7f7f7;
    }
  }
`;

export default LogoStyled;
