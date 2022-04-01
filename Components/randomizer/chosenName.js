import react, {useEffect, useState} from "react";
import styles from '../../styles/Home.module.css';
import { Button, Spinner } from "reactstrap";



const ChosenName = (props) =>{

    const [name, setName] = useState("");
    const [show, setShow] = useState(false);


    const selectRandom = () =>{
        var randomName = props.names[Math.floor(Math.random() * props.names.length)];
        setName(randomName);
    }

    const handleButton = (e) =>{
        e.preventDefault();
        props.setRandomized(!props.randomized);

    }

    useEffect( () =>{
        const timeout = setTimeout(() => {
            setShow(true)
          }, 1000)
      
          return () => clearTimeout(timeout)
      
        }, [show])

    useEffect( () =>{
        selectRandom();
    }, [])

    if(!show){
        return (
            <div className={styles.chosen_name}>
                <Spinner color="warning" size="">Loading...</Spinner>
            </div>
        )
    }

    return(
        
        <div className={styles.chosen_name}>
            <h1>Da er det bare å drekke {name}</h1>
            <br />
            <Button onClick={handleButton}>Kjør igjen</Button>
        </div>
    )
}


export default ChosenName;