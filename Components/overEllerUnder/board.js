import react, {useState, useEffect} from "react";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import OuE_lostMessage from "./lostmessage";



const OeUBoard = (props) =>{

    const [card, setCard] = useState("");
    const [prefetchedCard, setPrefetchedcard] = useState("");
    const [deckId, setDeckId] = useState("");
    const [start,setStart] = useState(true);
    const [gameLost, setGameLost] = useState(true);
    const [counter, setCounter] = useState(0);
  

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
                }
            });
    };

    const getCard = async () => {
        console.log(deckId);
        if(deckId){
        await fetch(`https://deckofcardsapi.com/api/deck/` + deckId + `/draw/?count=1`, requestOptions)
            .then((res) => res.json())
            .then((card) => {
              if(card)
                setCard(card.cards[0]);
            });
        }
    };

    const prefetchCard = async () => {
      if(deckId){
      await fetch(`https://deckofcardsapi.com/api/deck/` + deckId + `/draw/?count=1`, requestOptions)
          .then((res) => res.json())
          .then((card) => {
            if(card)
              setPrefetchedcard(card.cards[0]);
          });
        }
  };

  function getImage(){
    if (card != null){
        return card.image;
    }
    return "https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
}

    //converts the value of the card (handles "king", "queen" etc..)
    const convertCard = (number) =>{
      let value = 0;

      switch(number){
        case "ACE":
          value = 14
          break;
        case "QUEEN":
          value = 13
          break;
          
        case "KING":
          value = 12
          break;
        case "JACK":
          value = 11
          break;
        default:
          value = parseInt(number);
      }
      return value;
    }

    //handles guessing over
    const handleOver = () =>{
        if(prefetchedCard){

          //the current card value;
          const currentCard_value = convertCard(card.value);
          
          //the value of the next card
          const prefetchedCard_value = convertCard(prefetchedCard.value);

          //check value
          if(prefetchedCard_value>=currentCard_value ){
            console.log(true);
            setCard(prefetchedCard);
            
          }

          else{
            console.log(false);
            setGameLost(true);
            setCard(prefetchedCard);
          }
          increment();
        }
        
    }

    //handles guessing under
    const handleunder = () =>{
        if(prefetchedCard){

          //the current card value;
          const currentCard_value = convertCard(card.value);
          
          //the value of the next card
          const prefetchedCard_value = convertCard(prefetchedCard.value);

          //check value
          if(prefetchedCard_value<=currentCard_value){
            console.log(true);
            setCard(prefetchedCard);
            
          }

          else{
            console.log(false);
            setGameLost(true);
            setCard(prefetchedCard);
          }
          increment();
        }

    }

    const increment = () =>{
      setCounter(counter+1);
    }


    const handleStart = () =>{
      if(start){
        getCard();
        setGameLost(false);

        if(counter>0){
          getDeck();
          setCounter(0);
        }
      }
      setStart(false);
    }

    //fetched the deck
    useEffect( () =>{
        getDeck();
    }, [])

    //prefetches next card
    useEffect( () =>{
        
        prefetchCard();
    }, [card])

      return (

        <div className={styles.OeU_container}>
          <Button className={styles.OeU_start_button}  onClick={handleStart} style={{backgroundColor:"#ED1C24", color:"white", fontSize:"40px"}} >Kjør</Button>
          <OuE_lostMessage visible={gameLost} counter={counter}/>

          <div className={gameLost? styles.OeU_board_lostGame :styles.OeU_board} >
            
            <div>
              <Button className={styles.OeU_button} onClick={handleOver} disabled={gameLost? true : false} style={{backgroundColor:"#ED1C24", color:"white", fontSize:"40px"}}>Over</Button>
            </div>

            <div className={styles.OeU_card}>
              <img src={getImage()} />
            </div>

            <div>
                <Button className={styles.OeU_button} onClick={handleunder}disabled={gameLost? true : false} style={{backgroundColor:"#ED1C24", color:"white", fontSize:"40px"}}>Under</Button>
            </div>

          </div>
        </div>
  )
}

export default OeUBoard;