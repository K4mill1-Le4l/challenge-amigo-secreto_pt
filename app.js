//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("amigo").setAttribute("placeholder", "Digite um nome");
});

function limparCampo() {
    let novoAmigo = document.querySelector("#amigo");
    novoAmigo.value = "";
    novoAmigo.setAttribute("placeholder", "Digite um nome");  
}

function adicionarAmigo() {
    const contemNumeros = /\d/;
    let novoAmigo = document.querySelector("#amigo").value.trim();
    
    if (!novoAmigo || contemNumeros.test(novoAmigo)) {
        alert("Por favor, insira um nome válido.");
    } else if (amigos.includes(novoAmigo)) {
        alert("O nome já está na lista, digite um novo nome.");
    } else {
        amigos.push(novoAmigo);
        atualizarListaAmigos();
    }
    limparCampo();
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li style="text-align: center;">${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos os nomes foram sorteados. Por favor, inicie um novo sorteio.");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indice, 1)[0];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li style="text-align: center; font-weight: bold;">O amigo sorteado é: ${amigoSorteado}</li>`;
    
    novoSorteio();
}

function novoSorteio() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}
