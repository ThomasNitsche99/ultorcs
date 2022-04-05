import react, {useState} from "react";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";



const OuE_lostMessage = (props) =>{

    const handleButton = () =>{
      window.location.reload();
    }

  
      return (
        <div className={props.visible && props.counter>=1 ? styles.OuE_lostmessage_visible : styles.OuE_lostmessage}>
          <h1>Bro</h1>
          <br />
          <h1>Drikk {props.counter} slurker !</h1>
        
          <Button style={{fontSize:"25px", backgroundColor:"black"}} onClick={handleButton}>Rematch</Button>
        </div>
  )
}

export default OuE_lostMessage;