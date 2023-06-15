import { useGlobalContext } from '../../context';
import FavoritesContainer from './favorites-container';

const Favorites = () => {
	const { favorites } = useGlobalContext();
	return (
		<section className='favorites'>
			<div className='favorites-content'>
				<h5>Favorites</h5>
				<div className='favorites-container'>
					<FavoritesContainer favorites={favorites} />
				</div>
			</div>
		</section>
	);
};

export default Favorites;
