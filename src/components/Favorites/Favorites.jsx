import React from 'react';
import { useGlobalContext } from '../../context';
import FavoritesItem from './favorites-item.component';

const Favorites = () => {
	const { favorites } = useGlobalContext();
	return (
		<section className='favorites'>
			<div className='favorites-content'>
				<h5>Favorites</h5>
				<div className='favorites-container'>
					{favorites.map(item => {
						const { idMeal, strMealThumb: image } = item;
						return <FavoritesItem key={idMeal} idMeal={idMeal} image={image} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Favorites;
