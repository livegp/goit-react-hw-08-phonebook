import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import LogoutButton from './Logout.styled';
import { logOutUser } from '../../../../../redux/authReducer';

function Logout() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <LogoutButton type="button" onClick={handleLogOut}>
      <IoLogOutOutline />
    </LogoutButton>
  );
}

export default Logout;
