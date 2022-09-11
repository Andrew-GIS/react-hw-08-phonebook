import { Outlet } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserMenu } from '../UserMenu/UserMenu';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
	const isError = useSelector(state => state.auth.error);
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	// const dispatch = useDispatch();

	useEffect(() => {
		if (isError) {
		toast.error(isError);
		}
	}, [isError]);
	
	return (
		<div className={css.wrapper}>
			<div className={css.conteiner}>
				<div className={css.header}>
					{isLoggedIn && <UserMenu />}
				</div>
				<Suspense fallback={<div>Loading...</div>}>
          			<Outlet />
        		</Suspense>
			</div>
		</div>
	);
}