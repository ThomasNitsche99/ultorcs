import react from "react";
import styles from '../../styles/Home.module.css'
import NavBar from "../../Components/Nav/NavComponent";
import RandomizerComponent from "../../Components/randomizer/randomizerComponent";
import 'bootstrap/dist/css/bootstrap.min.css';



const Randomizer = () =>{
      return (
        <div className="">
          <NavBar />
            <div className={styles.container}>
              <RandomizerComponent />
            </div>

        </div>
  )
}

export default Randomizer;