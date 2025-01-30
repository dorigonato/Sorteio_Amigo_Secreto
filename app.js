//PASSO 1: Criar um array para armazenar os nomes
let amigos = [];

//PASSO 2: Implementa uma função para agregar amigos
function adicionarAmigo() {
	const input = document.getElementById("amigo");
	const nome = input.value.trim();

	// Validacao
	if (!nome) {
		alert("Por favor, insira um nome o campo não pode ser vazio.");
		return;
	}

	// Verifica se o nome já existe (case sensitive)
	if (amigos.includes(nome)) {
		alert(
			"Nome já existe na lista. Cada amigo só pode constar uma vez na lista."
		);
		input.value = ""; // Limpa o campo
		input.focus(); // Mantém o foco no campo
		return;
	}

	// Adiciona ao array e limpa campo
	amigos.push(nome);
	input.value = "";

	// Atualiza a lista de amigos
	atualizarLista();
}

// PASSO 3: Implementa uma função para atualizar a lista de amigos
function atualizarLista() {
	const lista = document.getElementById("listaAmigos");
	lista.innerHTML = "";

	amigos.forEach((amigo) => {
		const item = document.createElement("li");
		item.textContent = amigo;
		lista.appendChild(item);
	});
}

// PASSO 4: Implementa uma função para sortear os amigos
function sortearAmigo() {
	if (amigos.length === 0) {
		alert("Adicione amigos a sua lista antes de sortear!");
		return;
	}

	// Logica do sorteio
	const indiceSorteado = Math.floor(Math.random() * amigos.length);
	const resultado = document.getElementById("resultado");
	resultado.innerHTML = `<li> Amigo secreto: ${amigos[indiceSorteado]} </li>`;
}

// Para usar a tecla ENTER do teclado para adicionar nome na lista
document.getElementById("amigo").addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		adicionarAmigo();
	}
});
