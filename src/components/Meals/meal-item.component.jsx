import { useGlobalContext } from '../../context';
import { BsHandThumbsUp } from 'react-icons/bs';

const MealItem = ({ idMeal, image, title }) => {
	const { addToFavorites, selectMeal } = useGlobalContext();
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
