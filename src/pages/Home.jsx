import { StarWarsCard } from "../components/StarWarsCard.jsx";


const MOCK_IMAGE_URL = "https://starwars-visualguide.com/assets/img/placeholder.jpg";

export const Home = () => {
	return (<>
		<StarWarsCard imgURL={MOCK_IMAGE_URL} title="Star Wars Card Example">
			<p className="card-text">
						The place is close to Barceloneta Beach and bus stop just 2 min by
						walk and near to &quot;Naviglio&quot; where you can enjoy the main
						night life in Barcelona.
			</p>
		</StarWarsCard>
		</>
	);
}; 