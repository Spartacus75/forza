import AppBar from '../Assets/AppBar'
import {useEffect, useState} from 'react'
import axios from 'axios'


export default function MyAppBar(){

const [meteo, setMeteo] = useState('')


//ici on va récupérer des données sur une API...
useEffect(()=>{

    const fetchData = async () => {

      var city_1 = 3169070//'Roma'
      var city_2 = 264371//"Athens"
      var city_3 = 2988507//"Paris"
      var city_4 = 6618983//"Zagreb"

      var tableauMeteo = []



    return await  axios.get(`http://api.openweathermap.org/data/2.5/group?id=${city_1+',' + city_2+',' + city_3+',' + city_4}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                  .then(function (response) {
                    // handle success
                    console.log('meteo', response.data.list);
                    //ici on va construire notre array pour ensuite l'exploiter dans le render
                    response.data.list.forEach(item => {

                                //console.log(item.name)//city
                                //console.log(item.main.temp)//temp (-273.15)
                                //console.log(item.wind.speed)//wind speed m/s
                                //console.log(item.weather[0].icon)

                              tableauMeteo.push({city: item.name, temp: Math.round(item.main.temp-273.15), wind: item.wind.speed, weather: item.weather[0].icon})



                                    })

                                    setMeteo(tableauMeteo)



                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                  })
                  .then(function () {
                    // always executed
                  });


    }

    fetchData()




}, [])


console.log('fetch', meteo)

  return (
    <>

    <AppBar
      meteo={meteo}
    />


    </>
  )
}
