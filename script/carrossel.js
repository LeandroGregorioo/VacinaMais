let radioAtual = 1;

setInterval(() => {
    radioAtual = radioAtual + 1;

    if (radioAtual > 3) {
        radioAtual = 1;
    }

    document.getElementById("radio" + radioAtual).checked = true;
}, 4000);

document.querySelectorAll('input[name="radio-bnt"]').forEach((radio, i) => {
    radio.addEventListener("change", () => {
        radioAtual = i + 1;
    });
});