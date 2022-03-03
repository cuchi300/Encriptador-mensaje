//BOTON ENCRIPTAR MENSAJE
const inputTexto = document.querySelector("#input-texto");
inputTexto.value;
let textoResultado = document.querySelector("#msg");

function encriptar(event) {
  event.preventDefault();

  let texto = inputTexto.value;
  let textoModificado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  textoResultado.value = textoModificado;

  return textoModificado;
}

let botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.onclick = encriptar;

//BOTON COPIAR MENSAJE

function copiarMensaje() {
  const contenido = document.querySelector("#msg");

  contenido.select();
  contenido.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(contenido.value);

  alert("Se copio el texto " + contenido.value);

  contenido.value = "";
}

// BOTON DESENCRIPTAR MENSAJE
const botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();

  let texto = inputTexto.value;
  let textoModificado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  textoResultado.value = textoModificado;

  return textoModificado;
});
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
