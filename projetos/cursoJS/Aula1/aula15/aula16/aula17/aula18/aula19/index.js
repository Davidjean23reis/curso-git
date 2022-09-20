/*
primitivos imutáveis- strings - number- boolean -undefined, null ( bigint, symbol) são copiados

 Referência (mutável) - array object fuction - passados por referência
*/

const a = {
    nome: 'david',
    sobrenome:'jean'
};
const b = {...a};

b.nome= 'joão';
console.log(a);
console.log(b);