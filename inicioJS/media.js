//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("h3"); 
const resp2 = document.querySelector("h4"); 

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

    console.log("iuyiojkpoop")
   //obter os valores digitados
   const nome = frm.inNome.value; 
   const nota1 = Number(frm.inNota1.value); 
   const nota2 = Number(frm.inNota2.value); 

   const media = (nota1 + nota2) /2; 

   resp1.innerText = `Média das Notas ${media.toFixed(2)}`;

   if(media >= 7){
        resp2.innerText = `Parabéns ${nome}!, você foi aprovado!`;
        resp2.style.color = "blue"; 
   }
   
})
