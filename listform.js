const namelist = []


const adicionar = document.getElementById("btAdicionar"); 
const remover = document.getElementById("btRemover");
const filtrar = document.getElementById("btFiltrar");
const selecionar = document.getElementById("btSelecionar")
const saida = document.getElementById("saida");
const listE1 = document.getElementById("list");
const searchField = document.getElementById("searchField");
searchField.addEventListener("click", inputHandler);


this.fillList();

function fillList(list = namelist) {
    listE1.innerHTML = "";
    for(let i=0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listE1.appendChild(listItems);
    
    }
    
}

function inputHandler() {
    nome = searchField.value.toLowerCase();
    const filteredList = namelist.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    }); 

    fillList(filteredList);
  
}


//-----------------------------------------------------------------------------------------------------------------------

function functionAdicionar(){
    nome = searchField.value.toLowerCase();
    if(nome != ''){
        if (namelist.indexOf(nome) == -1){
            namelist.push(nome); 
            saida.innerHTML = "Novo nome adicionado!";
        }else{
            saida.innerHTML = "Nome já adicionado anteriormente"
        }

    } else {
        saida.innerHTML = "Nome inválido";
    }
    
}

 
function functionRemover(){
    nome = searchField.value.toLowerCase(); 
    var verifica = namelist.indexOf(nome);
    if(verifica > -1){
        namelist.splice(verifica, 1); 
        saida.innerHTML = "O nome foi removido com sucesso!"
    } else{
        saida.innerHTML = "Esse nome já foi removido antes."
    }


}

function functionSelecionar(){
    frm.btSelecionar.addEventListener("click", () => { 
        const nome = document.querySelectorAll("h5")  // obtém tags h5 da página
    
        if (namelist.length == 0) {
        alert("Não há tarefas para selecionar")       // se não há tarefas, exibe alerta
        return                                        // e retorna
        }
    
        let aux = -1                   // variável auxiliar para indicar linha selecionada
    
        // percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
        for (let i = 0; i < namelist.length; i++) {
        // se tag é da class tarefa-selecionada (está selecionada)
        if (namelist[i].className == "tarefa-selecionada") {
            namelist[i].className = "tarefa-normal"      // troca para normal
            aux = i                                     // muda valor da variável auxiliar
            break                                       // sai da repetição
        }
        }
    
        // se a linha que está selecionada é a última, irá voltar para a primeira
        if (aux == namelist.length - 1) {
        aux = -1
        }
    
        namelist[aux + 1].className = "tarefa-selecionada" // muda estilo da próxima linha
    })
    
}    
filtrar.addEventListener("click", inputHandler);
adicionar.addEventListener("click", functionAdicionar);
remover.addEventListener("click", functionRemover);
selecionar.addEventListener("click", functionSelecionar);

