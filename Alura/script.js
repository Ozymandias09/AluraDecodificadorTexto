const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensagem.value=textoEncriptado;
    textArea.value="";

};

function encriptar(stringEncriptada){
    const textoEncriptado=encriptar(textArea.value);
    mensagem.value= textoEncriptado;
    textArea.value= "";


let matrizCodigo=[["e", "enter"],["i", "imes"],["a", "oi"],["o", "ober"],["u", "ufat"]];
stringEncriptada=stringEncriptada.toLowerCase();
for (let i=0; let i<matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}
    return stringEncriptada;
};



function btnDesencriptar(){
    const textoDesencriptado= encriptar(textArea.value);
    mensagem.value=textoEncriptado;
    textArea.value="";

};

function desencriptar(stringEncriptada){
    const textoDesencriptado=desencriptar(textArea.value);
    mensagem.value= textoDesencriptado;
    textArea.value= "";

let matrizCodigo=[["e", "enter"],["i", "imes"],["a", "oi"],["o", "ober"],["u", "ufat"]];
stringDesencriptada=stringDesencriptada.toLowerCase();
for (let i=0; let i<matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][0])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}
    return stringDesencriptada;
};

