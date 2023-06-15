const SearchInput = ({ text, handleChange }) => {
	return (
		<input
			type='text'
			placeholder='type favorite meal'
			className='form-input'
			value={text}
			onChange={handleChange}
		/>
	);
};

export default SearchInput;
