// funcao construtora > objeto 
// funcao fábrica > objetos 

 function Pessoa (nome, sobrenome) {
this.nome= nome;
this.sobrenome = sobrenome;

this.metodo = function() {
console.log(this.nome + ': sou um metodo');
};

} 

 const p1 = new Pessoa('luiz', 'otavio' ); 
 const p2 = new Pessoa('Maria', 'oliveira'); 

p1.metodo();