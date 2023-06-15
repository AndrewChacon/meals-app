import { useState } from 'react';
import { useGlobalContext } from '../../context';
import SearchInput from './SearchInput/searchinput.component';

const Search = () => {
	const [text, setText] = useState('');

	const { setSearchTerm, fetchRandomMeal, fetchMeals, allMealsUrl } =
		useGlobalContext();

	const handleChange = e => {
		setText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (text) {
			setSearchTerm(text);
			setText('');
		} else {
			fetchMeals(allMealsUrl);
			setText('');
			setSearchTerm('');
		}
	};

	const handleRandomMeal = () => {
		setSearchTerm('');
		setText('');
		fetchRandomMeal();
	};

	return (
		<header className='search-container'>
			<form onSubmit={handleSubmit} action=''>
				<SearchInput text={text} handleChange={handleChange} />
				<button type='submit' className='btn'>
					search
				</button>
				<button
					type='button'
					className='btn btn-hipster'
					onClick={handleRandomMeal}>
					surprise me
				</button>
			</form>
		</header>
	);
};

export default Search;
