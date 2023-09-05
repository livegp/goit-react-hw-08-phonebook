import Section, { LinkToHome } from './NotPages.styled';
import { HOME_ROUTE } from '../../constants/routes';

function NotPages() {
  return (
    <Section>
      <h1>404 - Page not found</h1>
      <p>Sorry, the requested page does not exist.</p>
      <LinkToHome to={HOME_ROUTE}>Back to home page</LinkToHome>
    </Section>
  );
}

export default NotPages;
