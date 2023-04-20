const chave = "b593b4b337384bb9a3899a9fce9d739a"

function telaUsuario(dadosServidor) {
     /*console.log(dadosServidor) usado para testar a aplicação*/
     console.log(dadosServidor)
     document.querySelector(".cidad").innerHTML = " Tempo em " + dadosServidor.name
     document.querySelector(".grau").innerHTML = Math.floor(dadosServidor.main.temp) + "°C"
     document.querySelector(".previsao").innerHTML = dadosServidor.weather[0].description
     document.querySelector(".humid").innerHTML = dadosServidor.main.humidity + "%"
     document.querySelector(".imgtempo").src = `https://openweathermap.org/img/wn/${dadosServidor.weather[0].icon}.png`

     /* o dados reais do tempo sao tirados do site https://openweathermap.org/*/
}

async function buscarCidade(cidade) { /* funcao ASYNC para buscar do servidor*/

     const dadosServidor = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`). then(resposta => resposta.json())
      /* await para esperar o servidor carregar*/

      telaUsuario(dadosServidor)

}

function clickBt() {
    const cidade = document.querySelector(".place").value 

    buscarCidade(cidade)
}