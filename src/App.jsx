import "./App.scss";
import MainContainer from "./Components/MainContainer/MainContainer";
import { useState, useEffect } from "react"


function App() {

  const [beers, setBeers] = useState()

  useEffect( () => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setBeers(data) 
    })
  }, [])

  useEffect( () => {
    fetch("http://localhost:3020/api/beers")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data);
      setBeers(data) 
    })
  }, [])


  return (
    <div>
      {beers && <MainContainer beers = {beers} />}
    </div>
  );
}

export default App;
