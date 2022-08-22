import BeerCard from "../BeerCard/BeerCard";
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";
import "./MainContainer.scss";

const MainContainer = (props) => {


  const mappedBeersArr = props.beers.map((beer, key) => {
    return <BeerCard key = {key} name = {beer.name} image = {beer.image_url} abv = {`ABV ${beer.abv}%`} description = {beer.description}/>
  }) 

  const [searchTerm, setSearchTerm] = useState("")

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }
 
  const filteredBeers = props.beers.filter((beer) => {
    let beerHasMatched = true;

    if (searchTerm) {
      beerHasMatched = beer.name.toLowerCase().includes(searchTerm)
    }
    return beerHasMatched;
  })


  return (
    <>
      <div className="container">
        <div className="side__container"> <SearchBox searchTerm= {searchTerm} handleInput ={handleInput}/> </div>
        <div className="title"> <header>BREWDOG</header> </div>
        <div className="main__container">
          {mappedBeersArr}
        </div>
      </div>
    </>
  );
};

export default MainContainer;