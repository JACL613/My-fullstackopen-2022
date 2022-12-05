// import logo from './logo.svg';
import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import Filter from './components/Filter';

function App() {
  const [Show, setShow] = useState(false);
  const [Countries, setCountries] = useState();
  const [Data, setData] = useState('');
  const [Climates, setClimates] = useState();
  const api_key = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then((res) => setCountries(res.data))
    .catch((err) => console.log(err))
  }, []);

const handdelShow = async (capital) => {
  console.log(capital);
  setShow(!Show)
  const params = {
    access_key: api_key,
    query: capital
  }
  
  axios.get('http://api.weatherstack.com/current', {params:  params , proxy:{
    protocol: 'http'
  }})
    .then(response => {
      const apiResponse = response.data;
      console.log(apiResponse);
      setClimates(apiResponse)
    }).catch(error => {
      console.log(error);
    }); 
}
const handelCountry =  (Country) => {console.log(Country); setData([{...Country}])}
  return (
    <div className="App">
    {
      Countries 
      ?<Filter Data={Countries} setData={(e) => setData(e)} />
      :null
    }
     <ul>
     {Data && Data.length <= 10 && Data.length > 1
     ?Data.map((Country , index = 0) => <li key={index += 1}>{Country.name.official} <button onClick={() => handelCountry(Country)}>show</button></li>)
     :`La respuesta debe ser mas especifica,#resultados: ${Data.length}`}
     {
      Data.length === 1 
      ?
      (<div>
        <h2>Nombre: {Data[0].name.common}</h2>
        <h2>Capital: {Data[0].capital}</h2>
        <ul>
        {
         Object.values(Data[0].languages).map((value , index = 0)=> {
          return <li key={index += 1}>{value}</li>
         })
        }
        </ul>
        <img src={Data[0].flags.svg} alt="banderas" width='320' />
        {
          Show && Climates 
          ? (<div>
            <h2>Clima de {Climates.location.name}</h2>
            <h2>Temperatura de: {Climates.current.temperature} °C</h2>
            <img src={Climates.current.weather_icons[0]} alt='Logo clima'/>
            <h2>Vientos de: {Climates.current.wind_speed} mph </h2>
          </div>)
          :<button onClick={() =>handdelShow(Data[0].capital[0])}>Show climate</button>
        }
      </div>)
      :null
     }
     </ul>
    </div>
  );
}

export default App;
