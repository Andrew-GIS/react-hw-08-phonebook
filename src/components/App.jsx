import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from '../redux/auth/auth-operation';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivatRoute } from './PrivateRoute/PrivateRoute';

const RegisterPage = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginPage = lazy(() => import('../views/LoginView/LoginView'));
const PhoneBookPage = lazy(() => import('../views/PhoneBookPage'));
const NotFoundPage = lazy(() => import('../views/NotFoundPage/NotFoundPage'));

export function App() {
  const isRefreshing = useSelector(state => state.auth.refreshLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
      !isRefreshing &&
      (<>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } />
          <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
          />
          <Route
              path="contacts"
              element={
                <PrivatRoute>
                  <PhoneBookPage />
                </PrivatRoute>
              }
          />
            <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
      </>)
    );
}