import react, {useState, useEffect, useRef} from "react";
import { Form, FormGroup, Input, Label, Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import RandomizerNames from "./randomizer_names";
import ChosenName from "./chosenName";



const RandomizerComponent = () =>{

    const [randomized, setRandomized] = useState(false);
    const [names, setNames] = useState([]);
    const [input, setInput] = useState('');
    const nameInput=useRef(null);


    const handleButton = (e) =>{
        e.preventDefault();

        if( input === '' || input===null){
            return
        }else{
            setNames([...names,input]);
            setInput("");
        }  
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(names.length<2){
            return
        }

        setRandomized(true);
    }

    useEffect( () =>{
        nameInput.current.focus()
    },[names])


    useEffect( () =>{
        setNames([]);
        setInput("");
    }, [randomized])


    
    return(
        <div> 
            <Card>
                <CardHeader style={{fontSize:"40px", textAlign:"center"}}>Randomizer</CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className={styles.form_group}>
                            <Label for="name_input" style={{fontSize:"30px", marginBottom:"10px"}}>Skriv inn navnene på ultegutta</Label>
                            <Input bsSize="lg" id="name_input" name="name_input" placeholder="Legg til navn" type="text" value={input} onInput={e => setInput(e.target.value)} disabled={randomized?true:false} ref={nameInput} />
                            <Button style={{marginTop:"40px"}} onClick={handleButton} disabled={randomized?true:false}>Enter</Button>
                            <br />
                            <br />
                            <Button style={{width:"200px", height:"100px", backgroundColor:"red"}} type="submit" disabled={randomized?true:false}>Kjør</Button>
                        </FormGroup>
                        <br />
                        <br />
                        <hr />
                    </Form>
                </CardBody>
            

                {randomized? <ChosenName setRandomized={setRandomized} randomized={randomized} names={names}/>
                :
                <div className={styles.randomizer_names_container}>
                    {names.map( (name, key) => <RandomizerNames name={name} key={key}/>)}
                </div>
                }
            </Card>               
        </div>
    )
}


export default RandomizerComponent;