const apikey1 = "9c147e98ad968939bf8c32643bf88690"

const wetherdataele = document.querySelector('.temrature-div')

const citynameele = document.querySelector('#city-name')
const formele = document.querySelector('form')
const imgicon = document.querySelector('.iconimg')
const feelslike = document.querySelector('.feelslike')
const humaditity = document.querySelector('.Humidtity')
const airspeed = document.querySelector('.airspeed')

formele.addEventListener('submit',(e)=>{
    e.preventDefault()
    const cityValue= citynameele.value;

    getWetherdata(cityValue)

})

async function getWetherdata(cityValue){


    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=9c147e98ad968939bf8c32643bf88690&units=metric
`)
        if(!response.ok){
            throw new Error("Network respose is not ok!")
            
        }

        const data = await response.json()
        console.log(data)
        const temrature1 = Math.floor(data.main.temp)
        const decricption = data.weather[0].description
        const icon = data.weather[0].icon

        wetherdataele.querySelector('.temp').textContent = `Temp : ${temrature1}℃ `
        wetherdataele.querySelector('.desc').textContent = `${decricption}`
        imgicon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt='' height="100%" width="100%">`

        feelslike.textContent = `Feel like :${Math.floor(data.main.feels_like)}℃`
        humaditity.textContent = `Humidity : ${data.main.humidity}%`
        airspeed.textContent = `Air : ${data.wind.speed}M/S`

    }catch(err){

    }







}
