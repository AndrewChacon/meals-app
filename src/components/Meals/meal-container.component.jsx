import { useGlobalContext } from '../../context';
import MealItem from './meal-item.component';

const Meals = () => {
	const { loading, meals, selectMeal } = useGlobalContext();
	if (loading) {
		return (
			<section className='section'>
				<h4>Loading...</h4>
			</section>
		);
	}

	if (meals.length < 1) {
		return (
			<section className='section'>
				<h4>No meals matched your search term. Please try again.</h4>
			</section>
		);
	}

	return (
		<section className='section-center'>
			{meals.map(singleMeal => {
				const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;

				return (
					<MealItem
						idMeal={idMeal}
						image={image}
						selectMeal={selectMeal}
						title={title}
					/>
				);
			})}
		</section>
	);
};

export default Meals;
