import react from "react";
import styles from '../../styles/Home.module.css'
import NavBar from "../../Components/Nav/NavComponent";
import HestelopComponent from "../../Components/hestelop/hestelopComponent";
import FooterComponent from "../../Components/footer/footer";




const Hestelop = () =>{
      return (
        <div className="">
          <NavBar />
            <div className={styles.container}>
              <HestelopComponent />
            </div>
            <FooterComponent />
        </div>
  )
}

export default Hestelop;