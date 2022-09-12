import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import authOperation from '../../redux/auth/auth-operation';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  let dispatch = useDispatch();
  const { user } = useAuth();

  return (    
    <div className={css.userWrap}>
      <p className={css.authTitle}>
        Welcome <span className={css.userName}>{user.name}</span>
      </p>
      <button className={css.navButton} type="button" onClick={() => dispatch(authOperation.logOut())}>
        Log Out
      </button>
    </div>
  );
};


  // let userName = useSelector(state => state.auth.user.name);
  // let isUserLoggedIn = useSelector(state => state.auth.isLoggedIn);