// --- LÓGICA DA SAUDAÇÃO (O QUE VOCÊ JÁ SABE) ---
const horaAtual = new Date().getHours();
const campoSaudacao = document.getElementById('texto-saudacao');

if (horaAtual >= 18) {
    campoSaudacao.textContent = "Boa noite";
} else if (horaAtual >= 12) {
    campoSaudacao.textContent = "Boa tarde";
} else {
    campoSaudacao.textContent = "Bom dia";
}

// --- LÓGICA DA DATA (O QUE VOCÊ JÁ SABE) ---
const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1; // Mês no JS começa em 0
const ano = hoje.getFullYear();

const dataFormatada = dia + "/" + mes + "/" + ano;

// Enviando para o HTML
document.getElementById('data-atual').textContent = "Hoje é: " + dataFormatada;