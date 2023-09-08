import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { CONTACTS_ROUTE } from '../../constants/routes';
import { selectUserAuthentication } from '../../redux/authReducer';

function RestrictedRoute({ children, redirectTo = CONTACTS_ROUTE }) {
  const authenticated = useSelector(selectUserAuthentication);
  return authenticated ? <Navigate to={redirectTo} replace /> : children;
}

export default RestrictedRoute;
