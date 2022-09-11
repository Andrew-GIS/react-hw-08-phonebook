import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/auth/auth-operation';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  return (
    <div className={css.userWrap}>
      <p className={css.authTitle}>
        Welcome <span className={css.userName}>{userName}</span>
      </p>
      <button className={css.navButton} type="button" onClick={() => dispatch(userLogout())}>
        Log Out
      </button>
    </div>
  );
};