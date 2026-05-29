function calcular() {

    let capital = Number(document.getElementById("capital").value);
    let taxa = Number(document.getElementById("taxa").value) / 100;
    let tempo = Number(document.getElementById("tempo").value);
    let juros = document.getElementById("juros").value;
    let resultado;
    let montante;

    if (juros == "simples") {
        resultado = capital * taxa * tempo;
        montante = capital + resultado;
        document.getElementById("resultado").innerHTML =
            "Juros Simples: R$ " + resultado +
            "<br>Montante Final: R$ " + montante;
    } else {
        montante = capital * (1 + taxa) ** tempo;
        resultado = montante - capital;
        document.getElementById("resultado").innerHTML =
            "Juros Compostos: R$ " + resultado +
            "<br>Montante Final: R$ " + montante;
    }
}

function limpar(){
   document.getElementById("resultado").innerHTML = " ";
   document.getElementById("capital").value = " ";
   document.getElementById("tempo").value = " ";
   document.getElementById("taxa").value = " ";
}

function irParaPagina(){
    window.location.href = "sobre.html";
}