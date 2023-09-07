import { Navigate } from 'react-router-dom';

import { LOGIN_ROUTE } from '../../constants/routes';
import { useRefreshUserQuery } from '../../redux/authSlice';

function PrivateRoute({ children, redirectTo = LOGIN_ROUTE }) {
  const { data: user } = useRefreshUserQuery();

  const authenticated = Boolean(user);

  return authenticated ? children : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
