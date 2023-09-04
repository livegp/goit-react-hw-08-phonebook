import { IoLogOutOutline } from 'react-icons/io5';

import LogoutBtn from './Logout.styled';

function Logout() {
  return (
    <LogoutBtn type="button">
      <IoLogOutOutline />
    </LogoutBtn>
  );
}

export default Logout;
