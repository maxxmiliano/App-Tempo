const chave = "b593b4b337384bb9a3899a9fce9d739a"

async function buscarCidade(cidade) { /* funcao ASYNC para buscar do servidor*/

     const dadosServidor = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}`). then(resposta => resposta.json())
      /* await para esperar o servidor carregar*/
    console.log(dadosServidor)
}


function clickBt() {
    const cidade = document.querySelector(".place").value 

    buscarCidade(cidade)
}