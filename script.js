/ console.log("Bem vindo " + nome + " com a nota: " + notaFinal.toFixed(1))

const divResultado = document.querySelector('.resultado1');

resultado = () => {
	divResultado.innerText = '';
	var nome = document.querySelector(".nome").value;
var notaDoPrimeiroBimestre = Number(document.querySelector(".Nota1").value);
var notaDoSegundoBimestre = Number(document.querySelector(".Nota2").value);
var notaDoTerceiroBimestre = Number(document.querySelector(".Nota3").value);
var notaDoQuartoBimestre = Number(document.querySelector(".Nota4").value);
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4;
	var p = document.createElement("p");
	p.setAttribute("class", "nota")
	p.innerText =`${nome} tem a nota: ${notaFinal}`
	divResultado.append(p)
}

// toFixed arredonda pra quantas casa queremos.


//Revisão
//variaveis,strings,console.log, , toFixed, operações,matematicas, concaten