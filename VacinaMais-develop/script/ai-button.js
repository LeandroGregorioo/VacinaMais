//Função para abrir e fechar o container da IA
const aiContainer = ()=>{
    const container = document.getElementsByClassName("container-ai");
    const buttonOn = document.getElementById("on-ai");

    if (buttonOn.value == 1){
        buttonOn.style.display = "none";
        container[0].style.display = "flex";
        buttonOn.value = 0
    }else{
        buttonOn.style.display = "block";
        container[0].style.display = "none";
        buttonOn.value = 1
    }
}