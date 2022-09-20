function Calculadora() {
this.display = document.querySelector('.display');

 this.inicia = () => {
this.capturaCliques();
this.capturaEnter();
 };

 this.capturaEnter= () => {
document.addEventListener( 'keyup', e => {
if (e.keycode!== 13) return;
this.realizaConta();
});

 };


    document.addEventListener('click', event => {
const el= envent.target;
if(el.classList.contains('btn-num')) this.addNumdisplay(el);
if(el.classList.contains('btn-clear')) this.clear(el);
if(el.classList.contains('btn-del')) this.del(el);
if(el.classList.contains('btn-eq')) this.realizaconta(el);
  });
};

this.realizaconta = () => {
try {
const conta = eval(this.display.value);


if (!conta) {
 alert('conta inválida');
return;

}

this.display.value = conta;
} catch(e) {
alert('conta inválida');
return;

}

};




this.addNumdisplay = el => this.display.value += el.innerText;
this.clear = () => this.display.value = '';
this.inicia = () => this.del = () => this.display.value= this.display.value.slice(0, - 1);


 
const Calculadora = new  Calculadora();
calculadora.inicia();