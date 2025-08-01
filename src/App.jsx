import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import ContactsPage from './pages/ContactsPage';
import Navigation from './components/Navigation/Navigation';
import PublicRoute from './components/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isRefreshing) return <p>Refreshing user...</p>;

  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/register"
          element={<PublicRoute component={RegisterPage} />}
        />
        <Route path="/login" element={<PublicRoute component={LoginPage} />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route path="/" element={<PublicRoute component={LoginPage} />} />
      </Routes>
    </>
  );
}

export default App;
