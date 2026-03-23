document.addEventListener("DOMContentLoaded", () => {
  fetch("/nav.html")
    .then((response) => {
      if (!response.ok) throw new Error("Erro ao carregar nav");
      return response.text();
    })
    .then((data) => {
      document.getElementById("nav").innerHTML = data;
    })
    .catch((error) => console.error(error));

  fetch("/footer.html")
    .then((response) => {
      if (!response.ok) throw new Error("Erro ao carregar footer");
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error(error));
});