const pessoas = [
  { nome: "David", idade: 62 },
  { nome: "maria", idade: 23 },
  { nome: "joao", idade: 55 },
  { nome: "eli", idade: 19 },
  { nome: "isaias", idade: 32 },
  { nome: "elias", idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasComMaisDeciquentaAnos = pessoas.filter((obj) => obj.idade > 50);
const nomeTerminaComA = pessoas.filter((obj) => {
  return obj.nome.toLocaleLowerCase().endsWith("a");
});

console.log(nomeTerminaComA);
