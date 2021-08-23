const refreshBtn = document.getElementById("refresh-button");

const getData = () => {
  console.log("getting clicked");
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  axios.get("https://zenquotes.io/api/random").then((response) => {
    console.log(response);
  });
};

refreshBtn.addEventListener("click", getData);

