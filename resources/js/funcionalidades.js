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
  let textoParaDescriptografar = document.getElementById("originalTextarea").value;

  textoParaDescriptografar = textoParaDescriptografar.replace(/enter/g, 'e');
  textoParaDescriptografar = textoParaDescriptografar.replace(/imes/g, 'i');
  textoParaDescriptografar = textoParaDescriptografar.replace(/ai/g, 'a');
  textoParaDescriptografar = textoParaDescriptografar.replace(/ober/g, 'o');
  textoParaDescriptografar = textoParaDescriptografar.replace(/ufat/g, 'u');

  document.getElementById("resultadoTextarea").value = textoParaDescriptografar;
}


function copiar() {
  var resultadoTextarea = document.getElementById("resultadoTextarea");

  resultadoTextarea.select();
  document.execCommand("copy");

}

