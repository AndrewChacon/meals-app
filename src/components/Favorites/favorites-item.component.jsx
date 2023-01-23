import { useGlobalContext } from '../../context';

const FavoritesItem = ({ idMeal, image, selectMeal }) => {
	const { removeFromFavorites } = useGlobalContext();
	return (
		<div key={idMeal} className='favorite-item'>
			<img
				src={image}
				alt='Favorites Item'
				className='favorites-img img'
				onClick={() => selectMeal(idMeal, true)}
			/>
			<button
				className='remove-btn'
				onClick={() => removeFromFavorites(idMeal)}>
				remove
			</button>
		</div>
	);
};

export default FavoritesItem;
