const grid = document.getElementById("grid");
const nomeInput = document.getElementById("nome");
const telefone = "98985867114";

for (let i = 1; i <= 200; i++) {
  const num = i.toString().padStart(3, '0');
  const btn = document.createElement("button");
  btn.className = "number";
  btn.textContent = num;

  btn.onclick = () => {
    const nome = nomeInput.value.trim();
    if (!nome) {
      alert("Por favor, preencha seu nome antes de escolher um número.");
      return;
    }

    const mensagem = `Olá! Me chamo ${nome} e escolhi o número ${num} da rifa do Chá de Fralda. Valor R$10.`;
    const url = `https://wa.me/55${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');

    // Aplica o estilo de número selecionado
    btn.textContent = "X";
    btn.classList.add("selected");
    btn.disabled = true;
  };

  grid.appendChild(btn);
}
