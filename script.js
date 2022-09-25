/*
 Se mouse passar por cima
 Faça a propriedada imagem surpreso ser executada
 Se mouse clicar faça a propriedade sorrindo ser executada
 Senao
 Faça a propriedade normal ser exercudada
 Fimse

*/

/* Adicionar o modo noturno alterando a variável do css */

function modoClaro() {
  var root = document.querySelector(":root");
  root.style.setProperty("--primaryColor", "lightblue");
  root.style.setProperty("--secondaryColor", "lightblue");
  document.getElementById("modoClaro").style.visibility = "hidden";
  document.getElementById("modoNoturno").style.visibility = "visible";
}
function modoNoturno() {
  var root = document.querySelector(":root");
  root.style.setProperty("--primaryColor", "#0c1821");
  root.style.setProperty("--secondaryColor", "#040f16");
  document.getElementById("modoClaro").style.visibility = "visible";
  document.getElementById("modoNoturno").style.visibility = "hidden";
}

/* Adicionar o modo de gerar os números do nome no título */

/* Adicionar responsividade do navbar*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".itens-nav");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

// Eventos do personagem

function funcaoNormal() {
  const elem = (document.getElementById("personagem").src =
    "imagens/Sprite-0001.gif");
}
function funcaoSurpreso() {
  const elem = (document.getElementById("personagem").src =
    "imagens/SpriteSurpreso.gif");
}
function funcaoSorrir() {
  const elem = (document.getElementById("personagem").src =
    "imagens/SpriteSorrindo.gif");
}

// Botões Habilidade

function textNormal() {
  const textPadrao =
    "/* Passe em cima para visualizar a descrição da habilidade. */";
  document.getElementById("descricao").innerHTML = textPadrao;
}
function descHtml() {
  const textHtml = "Html";
  document.getElementById("descricao").innerHTML = textHtml;
}
function descJs() {
  const textJs = "Js";
  document.getElementById("descricao").innerHTML = textJs;
}
function descPhp() {
  const textPhp = "Php";
  document.getElementById("descricao").innerHTML = textPhp;
}
function descHtml() {
  const textHtml = "Html";
  document.getElementById("descricao").innerHTML = textHtml;
}

// Adicionar Carrousel dos Projetos

// const proj = document.getElementsByClassName("projetos");
// const imgs = proj.getElementsByTagName("img");
// let cont = 0;
// function carrousel() {
//   cont++;
//   if (cont > imgs.lenght - 1) {
//     cont = 0;
//   }
//   imgs.style.transform = "translateX()";
// }

// Adicionar jogo Cobrinha
