import React from 'react';
import FavoritesItem from './favorites-item.component';

const FavoritesContainer = ({ favorites }) => {
	return (
		<>
			{favorites.map(item => {
				const { idMeal, strMealThumb: image } = item;
				return <FavoritesItem key={idMeal} idMeal={idMeal} image={image} />;
			})}
		</>
	);
};

export default FavoritesContainer;
