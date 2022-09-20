const pessoa1 = {
nome: 'david', 
sobrenome: 'oliveira',
idade: 25,

fala() { 
 console.log(`A minha idade atual é ${this.idade}.`);
},
 incrementaIdade() {
 this.idade++;
 }
};
pessoa1.fala();
pessoa1.incrementaIdade
pessoa1.fala();
pessoa1.incrementaIdade
pessoa1.fala();
pessoa1.incrementaIdade
pessoa1.fala();

//function criaPessoa ( nome, sobrenome ,idade ) {
//return { nome, sobrenome, idade};
//}
 //const pessoa1 = criaPessoa('david', ' oliveira', 25)
 //const pessoa2 = criaPessoa('maria', ' souza', 30)
 // pessoa3 = criaPessoa('joão', ' ferreira', 50)
 //const pessoa4 = criaPessoa('william', ' pereira', 29)

 //console.log(pessoa1.nome, pessoa2.sobrenome);


 
//const pessoa1= {
//nome: 'david',
//sobrenome: 'oliveira',
//idade: 28

//};
//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);