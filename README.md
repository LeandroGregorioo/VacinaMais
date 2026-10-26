# 💉 VacinaMais — Carteira Digital de Vacinação

> **Projeto Acadêmico — Avaliação A2**  
> **Sistema Web com Linguagens Nativas (HTML5, CSS3/Flexbox e JavaScript Vanilla)**

---

## 📌 1. Nicho Escolhido e Justificativa do Negócio

* **Nicho de Mercado:** Saúde Preventiva e Gestão Pessoal de Imunização (Saúde Digital / *Health Tech* básica).
* **Problema Real Identificado:**  
  Historicamente, o controle vacinal da população brasileira é feito por cartões físicos de papel. Esse modelo tradicional acarreta diversos problemas:
  1. **Perda e Deterioração:** Cartões de papel molham, rasgam e são facilmente extraviados ao longo dos anos.
  2. **Esquecimento de Doses de Reforço:** Muitos cidadãos tomam a primeira dose e não sabem quando ou se precisam tomar a segunda dose ou reforço periódico (ex.: Tétano, Hepatite B, Covid-19, Gripe).
  3. **Falta de Praticidade:** Ao se deslocar a postos de saúde, viagens ou matrículas escolares/universitárias, a ausência de um histórico digital rápido e acessível dificulta a conferência do estado imunológico.

* **A Solução (VacinaMais):**  
  Uma carteira de vacinação digital intuitiva, leve e acessível em qualquer dispositivo, que centraliza o histórico de vacinas do usuário, alerta sobre próximas doses pendentes e permite o registro dinâmico e imediato de novas imunizações.

---

## ⚙️ 2. As 3 Funcionalidades Obrigatórias

Conforme as diretrizes da avaliação, o sistema entrega as seguintes funcionalidades essenciais:

### 1. Cadastro Dinâmico de Vacina (Formulário Interativo)
* Formulário completo onde o usuário registra uma nova dose informando:
  * Nome da vacina (ex.: *Hepatite B, Gripe, Tríplice Viral*);
  * Dose selecionável via `<select>` (*Dose única, 1ª dose, 2ª dose, 3ª dose, Reforço...*);
  * Data da aplicação com campo nativo de calendário;
  * Local de aplicação (ex.: UBS ou clínica);
  * Observações adicionais.
* Validação em tempo real (JavaScript) impedindo o envio com campos essenciais vazios e formatação automática de data para o padrão brasileiro (`DD/MM/AAAA`).

### 2. Painel de Status & Histórico Imunológico (Tabela Dinâmica)
* Listagem interativa que reflete em tempo real o estado de memória da aplicação.
* Cada registro exibe nome, dose, data, local e um **badge visual de status** (*"Em Dia"* ou *"PRÓXIMA DOSE"*), estilizado semântica e ergonomicamente com cores e ícones SVG.

### 3. Dashboard com Cálculo Automático e Próxima Dose
* **Métrica Total de Doses:** Card indicador que computa e atualiza dinamicamente a contagem total de vacinas tomadas pelo usuário a cada inserção.
* **Identificador de Próxima Dose:** Lógica em JavaScript que localiza automaticamente registros pendentes ou agendados e destaca no card superior qual imunizante requer a atenção imediata do usuário.

---

### ✨ Funcionalidades Extras (Diferenciais)

* **Autenticação com Máscara de CPF:** Página de login interativa com máscara dinâmica via regex (`000.000.000-00`) e validação via teclado (`Enter`) ou botão.
* **Carrossel Automático de Campanhas de Saúde:** Slider de banners informativos rotativo com temporizador JavaScript (`setInterval`) e controle manual via rádio estilizado.
* **Widget de Assistente Virtual (IA VacinaMais):** Chatbot flutuante interativo que pode ser aberto e fechado dinamicamente para tirar dúvidas de saúde.
* **Localizador de UBS:** Integração direta com Google Maps para localização instantânea da Unidade Básica de Saúde mais próxima do usuário.

---

## 🛠️ 3. Diretrizes de Execução & Requisitos Técnicos

O projeto foi construído respeitando rigorosamente todas as restrições impostas:

| Requisito | Implementação no Projeto |
| :--- | :--- |
| **Linguagens Nativas** | Desenvolvido exclusivamente em **HTML5 semântico**, **CSS3 puro** e **JavaScript Vanilla**. **Nenhum framework** (como React, Angular, Vue, Bootstrap ou Tailwind) foi utilizado. |
| **Flexbox Obrigatório** | Utilização extensiva de Flexbox em todo o layout (`display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`), estruturando cabeçalho, grid de dashboard, formulários, cards e rodapé. |
| **Dados Dinâmicos** | O sistema não utiliza dados hardcoded estáticos na tabela. O estado reside em arrays/objetos JavaScript em memória (`vacinas`, `lembretesMock`), manipulando o DOM dinamicamente (`innerHTML`, eventos `click`, `submit`, `input`). |
| **Responsividade Básica** | Layout flexível adaptável a telas mobile e desktop através de *Media Queries*, com menu móvel retrátil (`<details>`) e adaptação das colunas da tabela de vacinas em telas pequenas. |
| **Versionamento Git** | Repositório estruturado, padronizado e com histórico de commits claro e colaborativo. |
| **Hospedagem (Deploy)** | Publicado e testável online de forma contínua em serviço de hospedagem gratuita. |

---

## 🌐 4. Demonstração e Execução ao Vivo

* **Link da Aplicação em Produção:**  
  👉 **[https://leandrogregorioo.github.io/VacinaMais/]**

### 🔑 Credenciais para Demonstração Rápida
1. Acesse a tela de login inicial: `pages/login.html` (ou clique em *"Acessar minha carteira"* na landing page).
2. No campo de CPF, digite:  
   `000.000.000-00`
3. Clique em **Acessar** (ou pressione `Enter`).
4. Você será redirecionado para a tela principal (`home.html`), com todos os dados e formulários prontos para uso.

---

## 📂 5. Estrutura de Arquivos e Organização

A arquitetura de arquivos foi modularizada para manter um código limpo e de fácil manutenção:

```text
VacinaMais/
│
├── index.html                   # Landing page informativa inicial
│
├── pages/
│   ├── login.html               # Tela de login com validação de CPF
│   └── home.html                # Aplicação principal (Dashboard, Tabela, Formulário)
│
├── css/
│   ├── base/
│   │   ├── header.css           # Estilos de navegação, logo e menu responsivo
│   │   └── footer.css           # Rodapé semântico da aplicação
│   ├── components/
│   │   ├── ai_assistent_style.css # Estilos do widget de assistente virtual
│   │   └── carrossel.css        # Estilos e animações do carrossel de notícias
│   └── pages/
│       ├── indexstyle.css       # Estilo da landing page
│       ├── loginstyle.css       # Estilo do painel de login centralizado
│       └── homestyle.css        # Estilização completa do dashboard e Flexbox
│
├── script/
│   ├── script.js                # Lógica principal: estado em memória, renderização e dashboard
│   ├── login.js                 # Máscara regex de CPF e validação de acesso
│   ├── carrossel.js             # Temporizador e rotação automática de banners
│   └── ai-button.js             # Controle dinâmico de exibição do chat interativo
│
├── image/                       # Ícones, logo SVG e ilustrações
│   ├── carrossel/               # Imagens das campanhas informativas
│   └── imagens para div/        # Ilustrações temáticas (família, UBS, etc.)
│
└── README.md                    # Documentação técnica completa
```

---

## 💻 6. Como Executar o Projeto Localmente

Como o projeto utiliza exclusivamente tecnologias nativas da web, não é necessário instalar dependências com `npm` ou `yarn`.

1. Clone o repositório em sua máquina:
   ```bash
   git clone https://github.com/LeandroGregorioo/VacinaMais.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd VacinaMais
   ```
3. Abra o arquivo `index.html` em qualquer navegador moderno:
   * No Windows: dê dois cliques sobre `index.html` ou execute no terminal:
     ```powershell
     start index.html
     ```
   * Ou utilize a extensão **Live Server** no VS Code / Antigravity.

---

## ⏱️ 7. Roteiro Sugerido de Apresentação (5 a 8 minutos)

| Tempo | Etapa | Descrição |
| :---: | :--- | :--- |
| **0:00 - 1:30** | **1. Contexto e Nicho** | Apresentar os integrantes, contextualizar a dor do controle vacinal em papel e a proposta do VacinaMais. |
| **1:30 - 4:30** | **2. Demonstração Prática (Ao Vivo)** | - Entrar no link em produção.<br>- Fazer login com o CPF formatado.<br>- Mostrar o Dashboard e a lista inicial de vacinas.<br>- Cadastrar uma nova vacina e provar a atualização dinâmica na tabela e no card de contagem total. |
| **4:30 - 6:00** | **3. Qualidade Técnica do Código** | Destacar o HTML5 semântico, o uso estruturado de Flexbox no CSS e a manipulação dinâmica do DOM em Vanilla JS (sem frameworks). |
| **6:00 - 7:00** | **4. Conclusão & Perguntas** | Finalizar destacando a responsividade, diferenciais do projeto e abrir para considerações do avaliador. |

---

## 👥 8. Equipe do Projeto

| Nome Completo | RA / Matrícula | Responsabilidade Principal |
| :--- | :---: | :--- |
| **Nome do Aluno 1** | 0000000 | Estrutura HTML Semântico & Layout Flexbox |
| **Nome do Aluno 2** | 0000000 | Lógica JavaScript & Manipulação de Estado |
| **Nome do Aluno 3** | 0000000 | Componentes (Carrossel, IA, Validações) |
| **Nome do Aluno 4** | 0000000 | Deploy, Documentação e Responsividade |

---

> Projeto desenvolvido para fins educacionais como parte dos requisitos de avaliação da disciplina de Desenvolvimento Web.

