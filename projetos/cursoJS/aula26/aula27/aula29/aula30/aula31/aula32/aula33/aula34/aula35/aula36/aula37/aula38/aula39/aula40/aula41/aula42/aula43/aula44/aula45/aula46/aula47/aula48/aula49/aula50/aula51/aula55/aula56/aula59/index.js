function criaCalculadora() {
    return {
      display: document.querySelector(".display"),
      
      iniciar() {
          this.cliquebotoes(); 
      
      },
       
        realizaConta() {
         let conta = this.display.value;
         
         try {
      conta = eval(conta);
       
      if(!conta) {
     alert('conta inválida'); 
     return; 
   }
       this.display.value = conta;  
  } catch(e) {
  
  
  
         }
  
         },
       
      
      
      },
  
  
  
  
          clearDisplay()  {
      this.display.value =  ''; 
  
      },
     
       apagaUm() {
       this.Display.value = this.display.value.slice(0, -1);
  
       },
  
      
      },
        cliquebotoes() {
       document.addEventListener('click', e => {
        const el = e.target;
  
          if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
    }
          if(el.classList.contains('btn-clear')) {
              this.clearDisplay();
          }
          
          if(el.classList.contains('btn-del')) {
          this.apagaUm();
  
          }
         if(el.classList.contains('btn-eq')) {
         this.realizaconta();
  
         }
      });
  },
  
  btnParaDisplay(valor) {
  this.display.value + = valor;
       }
   
  };
  
  }
  
  const criaCalculadora=criaCalculadora();
   criaCalculadora.inicia();