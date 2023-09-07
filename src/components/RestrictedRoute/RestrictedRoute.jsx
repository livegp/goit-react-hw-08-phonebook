import { Navigate } from 'react-router-dom';

import { CONTACTS_ROUTE } from '../../constants/routes';
import { useRefreshUserQuery } from '../../redux/authSlice';

function RestrictedRoute({ children, redirectTo = CONTACTS_ROUTE }) {
  const { data: user } = useRefreshUserQuery();

  const authenticated = Boolean(user);

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
}

export default RestrictedRoute;
