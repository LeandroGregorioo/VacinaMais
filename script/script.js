// ==========================================
// MOCK DATA (Dados Simulados)
// ==========================================
const vacinas = [
    { nome: "Hepatite B", dose: "1ª dose", data: "15/01/2024", local: "UBS Central", status: "Em Dia" },
    { nome: "Hepatite B", dose: "2ª dose", data: "15/02/2024", local: "UBS Central", status: "Em Dia" },
    { nome: "Hepatite B", dose: "3ª dose", data: "15/07/2024", local: "UBS Central", status: "PRÓXIMA DOSE" },
    { nome: "Febre Amarela", dose: "Dose única", data: "20/03/2023", local: "Posto Saúde Sul", status: "Em Dia" },
    { nome: "Dupla Adulto (dT)", dose: "Reforço", data: "10/11/2022", local: "UBS Central", status: "Em Dia" },
    { nome: "Influenza", dose: "Dose única", data: "05/04/2024", local: "UBS Central", status: "Em Dia" }
];

const lembretesMock = [
    { id: 1, data: "15/07/2024", descricao: "Hepatite B - 3ª dose", status: "Em breve" },
    { id: 2, data: "05/04/2025", descricao: "Influenza - próxima dose", status: "Futuro" }
];

// ==========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ==========================================

// Função que desenha as vacinas na tela
const renderizarVacinas = () => {
    const divLista = document.getElementById("listadeVacinas");
    
    if (!divLista) return; 

    divLista.innerHTML = ""; 

    vacinas.forEach((vacina) => {
        // Classes semânticas para o CSS capturar
        let classeBadge = "badge-padrao";
        let classeIcone = "icone-azul"; 

        if (vacina.status === "Em Dia") {
            classeBadge = "badge-verde";
            classeIcone = "icone-verde";
        } else if (vacina.status === "PRÓXIMA DOSE") {
            classeBadge = "badge-azul";
        }

        const iconeEscudo = `
            <svg class="icone-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
        `;

        divLista.innerHTML += `
            <div class="linha-vacina">
                
                <div class="coluna-vacina info-principal">
                    <div class="container-icone ${classeIcone}">
                        ${iconeEscudo}
                    </div>
                    <span class="nome-vacina">${vacina.nome}</span>
                </div>
                
                <div class="coluna-vacina">
                    <span class="label-mobile">Dose:</span>
                    <span class="dado-vacina">${vacina.dose}</span>
                </div>
                
                <div class="coluna-vacina">
                    <span class="label-mobile">Data:</span>
                    <span class="dado-vacina">${vacina.data}</span>
                </div>
                
                <div class="coluna-vacina">
                    <span class="label-mobile">Local:</span>
                    <span class="dado-vacina">${vacina.local}</span>
                </div>
                
                <div class="coluna-vacina container-badge">
                    <span class="badge ${classeBadge}">${vacina.status}</span>
                </div>
                
            </div>
        `;
    });

    // Atualiza os Cards de Resumo (Dashboard Superior)
    atualizarDashboard();
};

// Função que desenha os lembretes na tela
const renderizarLembretes = () => {
    const divLembretes = document.getElementById("lista-lembretes");
    
    if (!divLembretes) return;

    divLembretes.innerHTML = "";

    lembretesMock.forEach((lembrete) => {
        let classeBadge = "badge-padrao";
        
        if (lembrete.status === "Em breve") {
            classeBadge = "badge-azul";
        } else if (lembrete.status === "Futuro") {
            classeBadge = "badge-verde";
        }

        divLembretes.innerHTML += `
            <div class="item-lembrete">
                <div class="icone-lembrete">
                    <span class="material-symbols-outlined">calendar_month</span>
                </div>
                <div class="info-lembrete">
                    <div class="cabecalho-info-lembrete">
                        <span class="data-lembrete">${lembrete.data}</span>
                        <span class="badge ${classeBadge}">${lembrete.status}</span>
                    </div>
                    <p class="desc-lembrete">${lembrete.descricao}</p>
                </div>
            </div>
        `;
    });
};

// ==========================================
// FUNÇÕES DE LÓGICA E INTERAÇÃO
// ==========================================

// Função para atualizar os valores dos Cards Superiores
const atualizarDashboard = () => {
    // Atualiza o Card Verde (Conta quantas vacinas tem no array)
    const elTotal = document.getElementById("total-vacinas");
    if (elTotal) elTotal.innerText = vacinas.length;

    // Atualiza o Card Azul (Busca a vacina que está com status de PRÓXIMA DOSE)
    const proxima = vacinas.find(v => v.status === "PRÓXIMA DOSE");
    if (proxima) {
        const elData = document.getElementById("proxima-data");
        const elVacina = document.getElementById("proxima-vacina");
        
        if (elData) elData.innerText = proxima.data;
        if (elVacina) elVacina.innerText = `${proxima.nome} - ${proxima.dose}`;
    }
};

// Função para adicionar uma NOVA vacina através do formulário
const adicionarVacina = () => {
    const nome = document.getElementById("nome-vacina").value;
    const dose = document.getElementById("dose-vacina").value;
    const data = document.getElementById("data-vacina").value;
    const local = document.getElementById("local-vacina").value;
    // Opcional: const obs = document.getElementById("obs-vacina").value;

    // Validação básica
    if (nome === "" || data === "") {
        alert("Preencha pelo menos o nome e a data da vacina!");
        return; 
    }

    // Formata a data (de AAAA-MM-DD para DD/MM/AAAA)
    const dataFormatada = data.split('-').reverse().join('/');

    // Adiciona ao array (assumimos "Em Dia" como padrão para novas vacinas)
    vacinas.push({ 
        nome: nome, 
        dose: dose || "Dose única", // Se não preencher, assume dose única
        data: dataFormatada, 
        local: local || "Não informado",
        status: "Em Dia" 
    });

    // Limpa os campos do formulário
    document.getElementById("nome-vacina").value = "";
    document.getElementById("dose-vacina").value = "Dose única";
    document.getElementById("data-vacina").value = "";
    document.getElementById("local-vacina").value = "";
    document.getElementById("obs-vacina").value = "";

    // Re-renderiza a lista e atualiza o contador do dashboard
    renderizarVacinas();
};

// ==========================================
// INICIALIZAÇÃO (Corre ao carregar a página)
// ==========================================
renderizarVacinas();
renderizarLembretes();