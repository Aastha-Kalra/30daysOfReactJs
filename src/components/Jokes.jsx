
import axios from "axios";
export async function getJoke() {

	const response = await axios.get(
		"https://official-joke-api.appspot.com/random_joke"
	);

	// Parse the response
	const data = response.data;

	return {
		setup: data.setup,
		punchline: data.punchline,
	};
}

getJoke();

// Sample Test
const joke = await getJoke();
console.log(joke);