import react from "react";
import styles from '../../styles/Home.module.css'
import NavBar from "../../Components/Nav/NavComponent";
import OeUComponent from "../../Components/overEllerUnder/oeu";




const OverEllerUnder = () =>{
      return (
        <div className="">
          <NavBar />
            <div className={styles.container}>
              <OeUComponent />
            </div>

        </div>
  )
}

export default OverEllerUnder;