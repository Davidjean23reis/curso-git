//declaraçao de funçao (fuction hoisting)
falaOi();
function falaOi() {
  console.log("Oie");
}

// first class objects (objetos de primeria classe)
// fuction Expresss
const souUmdado = function () {
  console.log("Sou um dado.");
};

function executaFuncao(funcao) {
  console.log("vou executar sua funçao abaixo:");
  funcao();
}
executaFuncao(souUmdado);

// Arrow  fuction
const funcaoArrow = () => {
  console.log("sou uma arrow fuction");
};
funcaoArrow();

// dentro de objeto
const obj = {
  falar: function () {
    console.log("Estou falando ...");
  },
};
obj.falar();