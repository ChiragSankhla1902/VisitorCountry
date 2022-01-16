import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';



function App() {

  const[location,setlocation]=useState('')
  const [city,setcity]=useState('')

  const getinfo=async()=>{
    await axios.get(`https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.REACT_APP_API}`)
    .then(function (response) {
      setlocation(response?.data?.country?.name)
      setcity(response?.data?.city?.name)
  })
  }


  useEffect(() => {
    getinfo()
  }, [])
  // console.log( navigator.geolocation)

  return (
    <>
      <div className="container">
        <h4>Country</h4>
        <input
         className="App"
          type="text"
          value={ `${location}\t${city}` }
          disabled={true}
        />

      </div>
    </>
  );
}

export default App;
