import Favorites from './components/Favorites/Favorites';
import Meals from './components/Meals/meal-container.component';
import Modal from './components/Modal/Modal';
import Search from './components/Search/Search';

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
