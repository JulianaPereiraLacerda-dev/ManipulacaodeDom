//Manipulação de Dom
/*
    DOM -> Document Object Model

    Principais métodos de seleção do DOM
        getElementById -> Serve para selecionar um elemento pelo seu ID.
        querySelector  -> Serve para selecionar o 1° elemento que corresponde a um sletor CSS. 
        querySelectorAll -> Serve para selecionar TODOS os elementos que correspondem ao seletor.
*/

// Exemplo usando getElementById--------------------------------------------------------------------------------------------------------------------------------------------------------------
// O Id funciona como se fosse um cpf para uma tag (é único)
// const titulo = document.getElementById("titulo");
// const valor = document.getElementById("titulo").innerText;
// console.log(titulo);
// console.log(valor);

// querySelector----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const titulo = document.querySelector("#titulo") //chamando ID -> #nome_id

// const paragrafo = document.querySelector(".paragrafo") // chamando classes -> .nome_classe

// const tituloh2 = document.querySelector("h2"); //chamando tags ->

// console.log(titulo);
// console.log(paragrafo);
// console.log(tituloh2);

// querySelectorAll -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const elementos = document.querySelectorAll(".texto");

// console.log(elementos);

// // percorrendo a lista

// elementos.forEach((elemento) =>{
//     console.log(elemento.innerText);
    
// })

//alterando textos.........................................................................................
// const itens = document.querySelectorAll(".texto");

// itens.forEach((item) => {
//     item.innerText = "Alterado"
// }) 

// itens.forEach((item) => {
//     item.innerHTML = "<h2>Item<h2>"
// })

// itens.forEach((item) => {
//     item.style.color = "#0000ff"
// })

//EVENTOS COM JS --------------------------------------------------------------------------------------------------------------------------------------------
//O que são eventos? São ações do usuário


//Evento de click 

// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou ")
// })

// Evento de digitação (input/ keyup)---------------------------------------------------------------------------------------------------------------------------

// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// campo.addEventListener("input", () => {
//     resultado.innerText = campo.value;
// })

// evento keyup -> dispara ao soltar a tecla---------------------------------------------------------------------------------------------------------------------------------------
// campo.addEventListener("keyup", () => {
//     resultado.innerText = campo.value;
//     console.log("Tecla pressionada.");
    
// })

//Evento de Mouse ---------------------------------------------------------------------------------------------------------------------------------

// const elemento = document.getElementById("troca-cor")

// // mouseover -> quando passar o mouse por cima
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor ="#FF0000"
// })

// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#0000FF"
//     elemento.style.backgroundColor = "";
// })

// document.addEventListener("mousemove", (evento) => {
//     console.log("Posição X:", evento.clientX, "Posição Y:", evento.clientY)
// })

//Evento de Formulário (submit)-----------------------------------------------------------------------------------------------------------------------------

// const form= document.getElementById("form")

// form.addEventListener("submit", (evento) => {
//     evento.preventDefault(); //impede o comportamento padrão

//     const nome = document.getElementById("nome").value;
//     console.log("Nome:", nome);
    
// })

//Criando elementos na página-------------------------------------------------------------------------------------------------------------
const novoElemento = document.createElement("p"); // Cria o elemento
novoElemento.innerText = "Elemento novo criado"

const form = document.getElementById("form");
document.form.appendChild(novoElemento)
