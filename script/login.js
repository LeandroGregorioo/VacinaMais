const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function () {
    // Remove tudo que não for número
    let cpf = this.value.replace(/\D/g, '');
    // Limita a 11 números
    cpf = cpf.substring(0, 11);

    // Aplica a máscara: 000.000.000-00
    cpf = cpf
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    this.value = cpf;
});
// função para logar com uma senha padrão que  direciona para pagina principal
const fazerLogin = () => {
    const cpfDigitado = document.getElementById("cpf").value;

    if (cpfDigitado === "000.000.000-00"){
        window.location.href = "../index.html"; //direcionando para a pagina index
        console.log(cpfDigitado)
    }
    else {
         alert("CPF Inválido");
    }
}

