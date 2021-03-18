function gerarCorAleatoria() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = randomColor;

  var text = document.getElementById("texto");
  text.innerText = randomColor;
}
