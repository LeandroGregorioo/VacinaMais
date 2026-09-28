// função para logar com uma senha padrão que  direciona para pagina principal
const fazerLogin = () => {
    const cpfDigitado = document.getElementById("cpf").value;

    if (cpfDigitado === "00000000000"){
        window.location.href = "index.html"; //direcionando para a pagina index
    }
    else {
         alert("CPF Inválido");
    }
}
// Nossa lista inicial de vacinas
const vacinas = [
    { nome: "Covid-19 (1ª Dose)", data: "2021-05-10", status: "Em dia" },
    { nome: "Febre Amarela", data: "2022-08-15", status: "Em dia" },
    { nome: "Tétano", data: "2013-01-20", status: "Atrasada" }
];

// Função que desenha as vacinas na tela
const renderizarVacinas = () => {
    const divLista = document.getElementById("listadeVacinas");
    
    // Se a div não existir na tela (por exemplo, na tela de login), ele para por aqui
    if (!divLista) return; 

    divLista.innerHTML = ""; // Limpa a tela antes de desenhar

    vacinas.forEach((vacina) => {
        let corStatus = "";
        if (vacina.status === "Em dia") {
            corStatus = "cor-verde";
        } else if (vacina.status === "Atrasada") {
            corStatus = "cor-vermelha";
        } else {
            corStatus = "cor-amarela";
        }

        divLista.innerHTML += `
            <div class="cartao-vacina">
                <h3>${vacina.nome}</h3>
                <p>Data: ${vacina.data}</p>
                <p>Status: <strong class="${corStatus}">${vacina.status}</strong></p>
            </div>
        `;
    });
};

// Função para adicionar uma vacina NOVA
const adicionarVacina = () => {
    const nome = document.getElementById("nome-vacina").value;
    const data = document.getElementById("data-vacina").value;
    const status = document.getElementById("status-vacina").value;

    if (nome === "" || data === "") {
        alert("Preencha o nome e a data da vacina!");
        return; 
    }

    vacinas.push({ nome: nome, data: data, status: status });

    document.getElementById("nome-vacina").value = "";
    document.getElementById("data-vacina").value = "";

    renderizarVacinas();
};

// Roda a função principal
renderizarVacinas();


