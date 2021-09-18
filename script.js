var numSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numSecreto) {
    resultado.innerHTML = "VOCE ACERTOU!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "USE APENAS O QUE TA ESCRITO NA TELA";
  } else {
    resultado.innerHTML = "ERROU!";
  }
}