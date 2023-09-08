import { useSelector } from 'react-redux';

import Logout from './Logout/Logout';
import User from './UserMenu.styled';
import {
  selectUserAuthentication,
  selectUserData,
} from '../../../../redux/authReducer';

function UserMenu() {
  const authenticated = useSelector(selectUserAuthentication);
  const userData = useSelector(selectUserData);
  if (authenticated) {
    return (
      <>
        <User>{userData.email}</User>
        {/* <Login /> */}
        <Logout />
      </>
    );
  }
}

export default UserMenu;
