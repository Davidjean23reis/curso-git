const pessoa= {
nome: 'David',
sobrenome: 'oliveira',
idade: 30,
endereço: {
  rua: 'sossego',
  numero: 187

}
}; 
console.log(pessoa); 
const {endereço: {rua, numero} } = pessoa; 
console.log(rua, numero);