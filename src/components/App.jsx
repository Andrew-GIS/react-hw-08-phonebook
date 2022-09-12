import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { useAuth } from 'hooks/useAuth';
import operations from '../redux/auth/auth-operation';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { Spiner } from '../components/Spiner/Spiner';

const RegisterPage = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginPage = lazy(() => import('../views/LoginView/LoginView'));
const PhoneBookPage = lazy(() => import('../views/PhoneBookPage'));
const NotFoundPage = lazy(() => import('../views/AboutPage/AboutPage'));

export function App() {
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (<Spiner/>) : (
 
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PublicRoute component={<NotFoundPage />} />} />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
          <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
          }
        />
            {/* <Route path="*" element={<NotFoundPage/>} /> */}
        </Route>
      </Routes>
    );
}