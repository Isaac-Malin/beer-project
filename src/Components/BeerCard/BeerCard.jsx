import "./BeerCard.scss"
import Button from "../Button/Button"

const BeerCard = ({name, image, abv, description}) => {

    return (
        <div className="beer-card">
          <h1 className="beer__name">{name}</h1>
          <img className="image" src={image} alt={name} />
          <p className="abv">{abv}</p> 
          <Button description = {description}/>
        </div>
    )
}

export default BeerCard;