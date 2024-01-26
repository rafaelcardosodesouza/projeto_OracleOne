let texto = " ";

function criptografar() {
  var textoOriginal = document.getElementById("originalTextarea").value;
  let tempTexto = "";
  const palavrasSecreta = { //é o objeto que vai armazenar as palavras secreta
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
  };

  for (let i = 0; i < textoOriginal.length; i++) {
    if (textoOriginal[i] in palavrasSecreta) {//se o caracter da posição i do texto original estiver no objeto palavrasSecreta
      tempTexto += palavrasSecreta[textoOriginal[i]];//adiciona a palavra secreta que está no objeto palavrasSecreta na posição i
    } else {
      tempTexto += textoOriginal[i];//se não estiver no objeto palavrasSecreta, adiciona o caracter da posição i do texto original
    }
  }
  document.getElementById("resultadoTextarea").value = tempTexto;
}

function decriptografar() {


}
function copiar() {

}

