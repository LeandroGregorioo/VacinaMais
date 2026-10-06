const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function () {
    let cpf = this.value.replace(/\D/g, '');

    cpf = cpf.substring(0, 11);

    cpf = cpf
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    this.value = cpf;
});

function fazerLogin() {
    const cpfDigitado = document.getElementById("cpf").value;

    if (cpfDigitado === "000.000.000-00") {

        console.log(cpfDigitado);

        window.location.href = "home.html";

    } else {

        alert("CPF Inválido");

    }
}

// Permite clicar no botão OU apertar Enter
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    fazerLogin();
});
