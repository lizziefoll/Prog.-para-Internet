//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("h3"); 
const resp2 = document.querySelector("h4"); 

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

    console.log("iuyiojkpoop")
   //obter os valores digitados
   const lado1 = Number(frm.inLado1.value); 
   const lado2 = Number(frm.inLado2.value); 
   const lado3 = Number(frm.inLado3.value); 

   //const media = (nota1 + nota2) /2; 

   //resp1.innerText = `Média das Notas ${media.toFixed(2)}`;

   const soma1 = (lado1 + lado2);
   const soma2 = (lado1 + lado3);
   const soma3 = (lado2 + lado3);


   if((lado1 = lado2 = lado3)){
        resp2.innerText = `Triangulo equilátero`;
        resp2.style.color = "red"; 
   }else if((lado1 == lado2 != lado3) || (lado1 == lado3 != lado2) || (lado2 == lado3 != lado1)){
        resp2.innerText = `Triangulo isosceles`;
        resp2.style.color = "blue"; 
   }else if((lado1 != lado2 != lado3)){
        resp2.innerText = `Triangulo escaleno`;
        resp2.style.color = "green"; 
    } else{
        resp2.innerText = `Não é possivel formar um triangulo`;
        resp2.style.color = "yellow"; 
    }  


   
})
