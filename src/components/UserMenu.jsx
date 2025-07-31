import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
