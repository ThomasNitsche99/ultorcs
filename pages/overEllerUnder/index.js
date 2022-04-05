import react from "react";
import styles from '../../styles/Home.module.css'
import NavBar from "../../Components/Nav/NavComponent";
import OeUComponent from "../../Components/overEllerUnder/oeu";
import FooterComponent from "../../Components/footer/footer";



const OverEllerUnder = () =>{
      return (
        <div className="">
          <NavBar />
            <div className={styles.container}>
              <OeUComponent />
            </div>
          <FooterComponent />
        </div>
  )
}

export default OverEllerUnder;