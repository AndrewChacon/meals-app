import React from 'react';
import { BsHandThumbsUp } from 'react-icons/bs';
import { useGlobalContext } from '../../context';

const MealItem = ({ idMeal, image, selectMeal, title }) => {
	const { addToFavorites } = useGlobalContext();
	return (
		<article key={idMeal} className='single-meal'>
			<img
				src={image}
				alt={title}
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
