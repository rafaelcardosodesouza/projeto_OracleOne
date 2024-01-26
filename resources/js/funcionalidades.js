let texto= " ";

function criptografar() {
  // Obtém o valor digitado no originalTextarea
  var textoOriginal = document.getElementById("originalTextarea").value;
  texto += textoOriginal + " passou pela a função criptografar";

  console.log(textoOriginal);

}

function decriptografar(){
  var textoOriginal = document.getElementById("originalTextarea").value;

  //na linha de baixo estava textando se estava conseguindo fazer certo, agora testa criar a logica da criptografia e da descriptografia
  document.getElementById("resultadoTextarea").value = texto;
  
}


