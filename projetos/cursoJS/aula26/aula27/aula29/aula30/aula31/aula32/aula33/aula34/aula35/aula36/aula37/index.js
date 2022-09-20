//for clássico - geralmete com interavéis (arrays ou strins)
//for in - retorna o indice ou chave (strings, arrays ou objetos)
// for of - retorna o valor em si (iteraveis, arrays ou strins) 
//           0123  
const nomes= ['david', 'jean' ,'Reis' ];

for (let i = 0; i < nomes.length; i++) {
console.log([i]);

}

console.log('####');

for (let i in nomes) {
console.log([i]);
} 

console.log('####');

for (let valor of nomes) {

console.log(valor);

}