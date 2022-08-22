import "./Button.scss"
import { useState } from "react"
import Description from "../Description/Description"

const Button = (props) => {

    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
        setIsToggled(!isToggled);
        <Description />
    }

    return (
        <>
        <button onClick={handleClick} className="info">{isToggled ? "CLICK TO CLOSE" : "CLICK ME FOR INFORMATION"}</button>
        {isToggled && <Description description = {props.description}/>}

        </>
    ) 
    
}

export default Button