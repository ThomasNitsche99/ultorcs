import react,{useState, useEffect} from "react";
import styles from '../../styles/Home.module.css';
import CardRow from "./cardRow";



const HestelopComponent = () =>{

    const [gameStart, setGameStart] = useState(false);


    return(
        <div className={styles.hestelop_container}>

            <div className={styles.left_cards}>
                <CardRow />
            </div>

            <br />
            <br />

            <div className={styles.playing_cards}>
            </div>




        </div>
    )
}

export default HestelopComponent;