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


