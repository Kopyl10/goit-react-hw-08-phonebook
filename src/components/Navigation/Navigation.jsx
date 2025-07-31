import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink> | <UserMenu />
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink> |{' '}
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
}
