import React, {useState, useEffect} from 'react'
import axios from "axios";
import Search from "../Search/Search";
import View from "../View/View";

const App = () =>{
    const key = process.env.REACT_APP_API_KEY
    const [countries, setCountries] = useState([])
    useEffect(() =>{
        axios
            .get("https://restcountries.eu/rest/v2/all/")
            .then(res => {
                setCountries(res.data)
            })
    },[])
    const[newFilter, setNewFilter] = useState('')
    const  onChangeFilterHandler = (event) => {
        setNewFilter(event.target.value)
    }
  return(
      <>
          <Search newFilter={newFilter} onChangeTar={onChangeFilterHandler}/>
          <View countries={countries} newFilter={newFilter} setNewFilter={setNewFilter} apiK={key}/>
      </>
  )
}

export default App;
