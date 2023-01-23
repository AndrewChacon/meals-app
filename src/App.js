import Search from './components/Search/search.component';
import Favorites from './components/Favorites/favorites.component';
import Meals from './components/Meals/meal-container.component';
import Modal from './components/Modal/modal.component';
import { useGlobalContext } from './context';

function App() {
	const { showModal, favorites } = useGlobalContext();
	return (
		<main>
			<Search />
			{favorites.length > 0 && <Favorites />}
			<Meals />
			{showModal && <Modal />}
		</main>
	);
}

export default App;
