///const tresHoras= 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date (0+tresHoras); // 01/01/1970
//console.log(data.toString());

//const data = new Date('1659474304085');
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth()); // Mês começa do zero
//console.log('ano', data.getFullYear());
//console.log('hora', data.getHours());
//console.log('min', data.getMinutes());
//console.log('seg', data.getSeconds());
//console.log('ms', data.getMilliseconds());
//console.log('Dia', data.getDay()); // 0 - domingo , 6 - sábado
//console.log(data.toString());
//console.log(Date.now()); 

function zeroAEsquerda (num) {
 return num >= 10 ? num : `0${num}`;

}


function formataData(data) {
const dia =zeroAEsquerda (data.getDate());
const mês =zeroAEsquerda (data.getMonth() +1 );
const ano = zeroAEsquerda (data.getFullYear());
const hora= zeroAEsquerda (data.getHours());
const min=  zeroAEsquerda (data.getMinutes());
const seg= zeroAEsquerda (data.getSeconds());
return `${dia}/${mes}/${ano} ${hora}: ${min}:${seg}`;

}  
 const  data = new Date ();
 const dataBrasil= formataData(data);
 console.log(dataBrasil);