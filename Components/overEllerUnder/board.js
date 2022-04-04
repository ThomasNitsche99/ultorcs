import react, {useState, useEffect} from "react";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";



const OeUBoard = (props) =>{

    const [card, setCard] = useState("");
    const [deckId, setDeckId] = useState("");


    const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

    const getDeck = async () => {
        await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`, requestOptions)
            .then((res) => res.json())
            .then((deck) => {
                console.log(deck)
                if(deck.deck_id){
                    setDeckId(deck.deck_id);
                    console.log(deckId);
                }
            });
    };

    const getCard = async () => {
        console.log(deckId);
        await fetch(`https://deckofcardsapi.com/api/deck/` + deckId + `/draw/?count=1`, requestOptions)
            .then((res) => res.json())
            .then((card) => {
                setCard(card.cards[0]);
                console.log(card)
            });
    };



  function getImage(){
    if (card != null){
        return card.image;
    }
    return "https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
}


    const handleStart = () =>{
        getCard();
        

    }

    useEffect( () =>{
        console.log("jaaa");
        getDeck();
    }, [])

    useEffect( () =>{
        console.log(card);
    }, [card])
    
      return (
        <div className={styles.OeU_board}>
          
          <div>
            <Button className={styles.OeU_button}>Over</Button>
          </div>

          <div>
            <Button className={styles.OeU_button} onClick={handleStart}>start</Button>
          </div>

          <div className={styles.OeU_card}>
            <img src={getImage()} />
          </div>

          <div>
              <Button className={styles.OeU_button}>Under</Button>
          </div>
        </div>
  )
}

export default OeUBoard;