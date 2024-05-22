


const key = "2afb77cc3b6de1daffe9d949821d94f8"




function exibirdados(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em: " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function api(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json())
    exibirdados(dados)
}

function clique() {
    const cidade = document.querySelector(".input-city").value
    api(cidade)
}