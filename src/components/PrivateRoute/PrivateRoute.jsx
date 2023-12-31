import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LOGIN_ROUTE } from '../../constants/routes';
import { selectUserAuthentication } from '../../redux/authReducer';

function PrivateRoute({ children, redirectTo = LOGIN_ROUTE }) {
  const authenticated = useSelector(selectUserAuthentication);
  return authenticated ? children : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
