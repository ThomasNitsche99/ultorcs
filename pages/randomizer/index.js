import react from "react";
import styles from '../../styles/Home.module.css'
import NavBar from "../../Components/Nav/NavComponent";
import RandomizerComponent from "../../Components/randomizer/randomizerComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from "../../Components/footer/footer";


const Randomizer = () =>{
      return (
        <div className="">
          <NavBar />
            <div className={styles.container}>
              <RandomizerComponent />
            </div>
          <FooterComponent />
        </div>
  )
}

export default Randomizer;