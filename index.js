const getQuotes = async () => {
  try {
    const res = await fetch("http://api.quotable.io/random");
    const data = await res.json();
    const myQuotes = document.querySelector("#quote");
    myQuotes.innerHTML = data.content;
  } catch (error) {}
};

window.addEventListener("load", () => {
  getQuotes();
});
