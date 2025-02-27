//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    // Verificar se o nome não está vazio
    if (nome !== "") {
        amigos.push(nome);
        input.value = "";  // Limpar o campo de entrada após adicionar o nome
        exibirAmigos();    // Atualizar a lista de amigos na tela
    }
}

// Função para exibir a lista de amigos na tela
function exibirAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpar lista antes de renderizar novamente

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    // Embaralhar a lista de amigos
    const amigosEmbaralhados = [...amigos];
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    // Atribuir amigos secretos
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpar resultado anterior

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${amigos[i]} tirou ${amigosEmbaralhados[(i + 1) % amigos.length]}`;
        resultado.appendChild(li);
    }
}
