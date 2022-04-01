import react from "react";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const RandomizerNames = (props) =>{
      return (
        <div className={styles.randomizer_names}>
          <h1> {props.name}</h1>
        </div>
  )
}

export default RandomizerNames;