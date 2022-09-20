const elementos = [
 {tag:'p',texto: ' Qualquer coisa que você quiser'},
 {tag:'diver',texto: ' frase 2 '},
 {tag:'section',texto: ' frase 3'},
 {tag:'footer',texto: ' frase 4'},
 
]; 

const container = document.querySelector('container');
const div =  document.createElement('div'); 


for (let i = 0; i <elementos.length; i ++) {
let { tag, texto } = elementos[i];
let tagCriada = document.getElementById(tag);
let textoCriado = document.createTextNode(texto);

     tagCriada.getElementById(textoCriado);
    div.getElementById(tagCriada);
}   

container.getElementById(div);



