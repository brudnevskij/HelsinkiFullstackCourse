import React from 'react'
import Country from "./Country/Country";


const View = ({countries, newFilter,setNewFilter, apiK}) => {


    const filtCountries = countries.filter(country =>{
        return country.name.toLowerCase().includes(newFilter.toLowerCase())
    })
    if(filtCountries.length <= 10 && filtCountries.length > 1){
        return(
            <>
                <ul>
                    {filtCountries.map(country =>{
                        return <li key={country.alpha2Code}>{country.name}<button onClick={()=>setNewFilter(country.name)}>show</button></li>
                    })}
                </ul>
            </>
        )
    }
    else if(1 === filtCountries.length){
        return (
            <Country info={filtCountries[0]} apiK={apiK}/>
        )
    }
    else if(filtCountries.length=== 0 ){
        return (
            <>
            There is no such countries
            </>
        )
    }
    return(
        <>
            There still more than 10 countries, please specify your search query.
        </>
    )
}


export default View;