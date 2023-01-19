import React from 'react';
import { BsHandThumbsUp } from 'react-icons/bs';

const MealItem = ({ idMeal, image, selectMeal, addToFavorites, title }) => {
	return (
		<article key={idMeal} className='single-meal'>
			<img
				src={image}
				alt=''
				className='img'
				onClick={() => selectMeal(idMeal)}
			/>
			<footer>
				<h5>{title}</h5>
				<button className='like-btn' onClick={() => addToFavorites(idMeal)}>
					<BsHandThumbsUp />
				</button>
			</footer>
		</article>
	);
};

export default MealItem;
