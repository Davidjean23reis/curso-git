const h1 = document.querySelector('container h1');
const data = new Date();{
 
};
h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())