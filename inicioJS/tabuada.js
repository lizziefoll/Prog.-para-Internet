//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("pre"); 
const respsoma = document.querySelector("h3"); 

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

    console.log("iuyiojkpoop");
   //obter os valores digitados
   const num = Number(frm.inNumero.value); 

    let resposta = ""; 
    let soma ="0"; 

   for (let i = 1; i <= 10; i++) {
        resposta += num + " X " + i + " = " + (num * i) + "\n" ; 
        soma += (num*i); 
   }
   resp1.innerText = resposta; 
   
})