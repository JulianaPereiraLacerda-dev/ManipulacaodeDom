
let numero = 0;

const texto = document.createElement("p");
texto.innerText = numero;
document.body.appendChild(texto);

const botao = document.createElement("button");
botao.innerText = "Aumentar";
document.body.appendChild(botao);

botao.addEventListener("click", () => {
    numero++; 
    texto.innerText = numero; 
});