const refreshBtn = document.getElementById("refresh-button");
const author = document.getElementById("author");
const quote = document.getElementById("quote");

const getData = () => {
  console.log("getting clicked");
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  axios.get("https://api.fisenko.net/quotes?l=en").then((response) => {
    console.log(response);
    author.innerHTML = response.data.author;
    quote.innerHTML = response.data.text;
  });
};

refreshBtn.addEventListener("click", getData);
