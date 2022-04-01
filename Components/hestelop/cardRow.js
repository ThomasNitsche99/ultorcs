import react from "react";
import styles from '../../styles/Home.module.css';
import Card from "./card";


const CardRow = (props) =>{


    return(
        <div className={styles.card_row}>
            <Card />
        </div>
    )
}

export default CardRow;