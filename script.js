const jokeEl = document.getElementById("joke");
const jokebtn = document.getElementById("jokeBtn");

console.log(jokebtn);

jokebtn.addEventListener("click", generateJoke);
generateJoke();

function generateJoke() {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
