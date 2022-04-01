import react from "react";
import styles from '../../styles/Home.module.css';


const Card = (props) =>{


    return(
        <div className={props.laying ? styles.card_laying : styles.card}></div>
    )
}

export default Card;