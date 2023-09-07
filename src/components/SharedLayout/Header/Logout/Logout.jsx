import { IoLogOutOutline } from 'react-icons/io5';

import LogoutButton from './Logout.styled';

function Logout() {
  return (
    <LogoutButton type="button">
      <IoLogOutOutline />
    </LogoutButton>
  );
}

export default Logout;
