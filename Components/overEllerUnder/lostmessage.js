import react, {useState} from "react";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import OeUBoard from "./board";
import { Button } from "reactstrap";



const OuE_lostMessage = (props) =>{

  
      return (
        <div className={!props.visible? styles.OuE_lostmessage : styles.OuE_lostmessage_visible}>
          <h1>You lost!</h1>
          <br />
          <h1>JAAAAAA</h1>
        </div>
  )
}

export default OuE_lostMessage;