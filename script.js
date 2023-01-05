const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke');
const twitterBtn = document.getElementById('twitter');
const jokeBtn = document.getElementById('new-joke');
const loader = document.querySelector('.loader');

// Loading spinner functionality that shows when retrieving data from API
function showLoader() {
	jokeContainer.hidden = true;
	loader.hidden = false;
}
function hideLoader() {
	jokeContainer.hidden = false;
	loader.hidden = true;
}

// Retrieve jokes from API
async function getJoke() {
	const jokeURL = 'https://icanhazdadjoke.com';

	try {
		const response = await fetch(jokeURL, {
			// Additional information required to fetch data from API
			headers: {
				Accept: 'application/json',
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}

// UI function to show joke on webpage
async function displayJoke() {
	showLoader();
	// Destructuring joke property into it's own from data object
	const { joke } = await getJoke();

	jokeText.textContent = joke;
	hideLoader();
}

// Function to tweet the joke as text on a new browser tab
function tweetJoke() {
	const twitterURL = `https://twitter.com/intent/tweet?text=${jokeText.textContent}`;
	window.open(twitterURL, '_blank');
}

// Event listeners
jokeBtn.addEventListener('click', displayJoke);
twitterBtn.addEventListener('click', tweetJoke);

displayJoke();
