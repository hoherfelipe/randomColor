var nome = "Felipe S. Hoher";
var cargo = "Entusiasta da tecnologia. \n Dev. WEB Jr."

var nomeHtml = document.getElementById("nome-no-html");
var cargoHTML = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHTML.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);
}

function clickNoProjetos(){
    console.log('Clicou no botão Projetos');
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log('Clicou no botão Sobre');
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);

