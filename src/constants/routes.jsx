import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import Contacts from '../pages/Contacts';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';

export const HOME_ROUTE = '/';
export const CONTACTS_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const NOTFOUND_ROUTE = '*';

export const appRoutes = [
  {
    path: CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <Contacts />
      </PrivateRoute>
    ),
  },
  {
    path: LOGIN_ROUTE,
    element: (
      <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: REGISTER_ROUTE,
    element: (
      <RestrictedRoute redirectTo={CONTACTS_ROUTE}>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: NOTFOUND_ROUTE,
    element: <NotFound />,
  },
];
