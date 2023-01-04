const jokeText = document.getElementById('joke');
const twitterBtn = document.getElementById('twitter');
const jokeBtn = document.getElementById('new-joke');

const jokesArray = [];

async function getJoke() {
	const jokeURL = 'https://icanhazdadjoke.com';

	const response = await fetch(jokeURL, {
		headers: {
			Accept: 'application/json',
		},
	});
	const joke = await response.json();
	console.log(joke);
	// try {
	// 	const response = await fetch(jokeURL);
	// 	const data = await response.json();

	// 	console.log(data);
	// } catch (error) {
	// 	console.log(error);
	// }
}

getJoke();
