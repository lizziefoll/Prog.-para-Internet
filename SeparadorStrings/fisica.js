//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp = document.querySelector("h3");  

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

   //obter os valores digitados
    const lado1 = String(frm.inEntrada.value); 
   //includes, splice, join 

   //recebe a lista, separa as frases por ;. 
   //coloca cada parte separada por um ; dentro de um array
   //le a ultima posição do array de cima e ve em qual posição a palavra desejada tem q ir
   //le a penultima posição do  array acima e coloca a palavra na posição colocada na ultima

   
})
