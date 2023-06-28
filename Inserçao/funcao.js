//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("h3"); 

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

   //obter os valores digitados
   const frase = String(frm.inFrase.value); 
   const Inserir =  String(frm.inInsert.value); 
   const posicao = Array(frm.inPos.value); 

    function insertString(str, toInsert, indexes){
        const charArray = str.split(""); 
        let insertCount = 0; 

        for(let i = 0; i <= str.length; i++){
            //console.log(str[i]); 
            if(indexes.includes(i)){
                charArray.splice(i + insertCount, 0, toInsert); 
                insertCount++
            }
        }

        return charArray.join(""); 
    }

    console.log(insertString("O Julio esta maluco", "de", [0,8]))

})    
