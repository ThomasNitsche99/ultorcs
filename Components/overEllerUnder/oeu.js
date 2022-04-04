import react from "react";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import OeUBoard from "./board";



const OeUComponent = (props) =>{






      return (
        <div className={styles.OeU_container}>
          <OeUBoard />
        </div>
  )
}

export default OeUComponent;