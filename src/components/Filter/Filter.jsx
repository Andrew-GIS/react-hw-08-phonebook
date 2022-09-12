import { FilterForm, FilterLable, FilterInput } from './Filter.styled';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactSlice';

export const FilterSection = ({ title }) => {
	const dispatch = useDispatch();
	return (
		<FilterForm autoComplete="off">
			<FilterLable htmlFor='filter'>
				{title}
				<FilterInput
					type="text"
					name='filter'
					// value={value}
					onChange={e => dispatch(changeFilter(e.currentTarget.value))}
					/>
			</FilterLable>
		</FilterForm>
	);
};

FilterSection.prototype = {
      title: propTypes.string,
      value: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
};