import FooterBox from './Footer.styled';
import { Container } from '../SharedLayout.styled';

function Footer() {
  return (
    <FooterBox>
      <Container>
        <p>
          {' '}
          &copy; 2023 Contacts App. All rights reserved. Designed and Developed
          by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/oleksandr-pishta"
          >
            Oleksandr Pishta
          </a>
        </p>
      </Container>
    </FooterBox>
  );
}

export default Footer;
