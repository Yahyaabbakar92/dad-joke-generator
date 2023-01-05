const jokeText = document.getElementById('joke');
const twitterBtn = document.getElementById('twitter');
const jokeBtn = document.getElementById('new-joke');

async function getJoke() {
	const jokeURL = 'https://icanhazdadjoke.com';

	const response = await fetch(jokeURL, {
		headers: {
			Accept: 'application/json',
		},
	});
	const data = await response.json();
	// console.log(data);
	return data;
}

async function displayJoke() {
	const { joke } = await getJoke();
	// console.log(joke);
	jokeText.textContent = joke;
}

jokeBtn.addEventListener('click', displayJoke);

displayJoke();
