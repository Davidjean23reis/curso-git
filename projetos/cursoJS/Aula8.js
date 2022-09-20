/*
david jean tem 28 anos , pesa 60 kg
tem 1.6 altura e seu IMC 54564865
david nasceu em 1994
*/
const nome= 'david';
const sobrenome= 'jean';
const idade= 28;
const peso= 60;
const alturaEmM= 1.80
let indiceMassacorporal;// peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal= peso / (alturaEmM * alturaEmM);

// template string

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu ${indiceMassaCorporal} é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);