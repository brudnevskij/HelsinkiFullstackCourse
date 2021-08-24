import React,{useEffect, useState} from 'react'
import axios from "axios";



const Country = ({info, apiK}) => {
    const urlGet = `https://api.weatherapi.com/v1/current.json?key=${apiK}&q=${info.capital}&aqi=no`
    useEffect(()=>{
        axios
            .get(urlGet)
            .then(res => {
                setWeather(res.data.current)
            })
    }, [urlGet])
    const [weather, setWeather] = useState([])
    return(
        <>
            <h1>{info.name}</h1>
            <p>capital :{info.capital}</p>
            <p>population :{info.population}</p>
            <h2>Languages</h2>
            <ul>
                {info.languages.map(language =>{
                    return(<li key={language.iso639_1}>{language.name}</li>)
                })}
            </ul>
            <img alt={info.name} width={200} src={info.flag}/>
            <h2>Weather</h2>
            temperature: {weather.temp_c}
            <br/>
            <br/>
            wind: {weather.wind_degree}
        </>
    )
}


export default Country