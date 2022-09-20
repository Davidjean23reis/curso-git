const numero = Number (prompt('digite um número'));
const numeroTitulo = document.getElementById ('número do titulo');
const texto = document.getElementById('texto')

//numeroTitulo.innerHTML = numero;


texto.innerHTML+= '';
texto.innerHTML+= `<p> raiz quadrada: ${numero** 0.5}.</p>`;
texto.innerHTML+= ` <p> É NaN: ${number.isNaN(numero)}.</p>`;
texto.innerHTML+= ` <p> ${numero} é inteiro ${number.isInteger(numero)}.</p>`;
texto.innerHTML+= `<p> Arredondando para baixo ${Math.floor(numero)}.</p>`;
texto.innnerHTML+= `<p> Arredondando para cima ${Math.ceil(numero)}.</p>`;
texto.innerHTML+= ` <p> duas casas decimais ${numero.toFixed(2)}.</p>`;