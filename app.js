const jokes = document.querySelector('#jokes');
const button = document.querySelector('#btn');
const clearButton = document.querySelector('#clrbtn');

const addNewJokes = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get('https://icanhazdadjoke.com', config);
        return res.data.joke;
    } catch (e) {
        return "SORRY!! No Jokes Available :(";
    }

}

const clearJoke = () => {
    jokes.innerHTML = "";
}

button.addEventListener('click', addNewJokes);
clearButton.addEventListener('click', clearJoke);
