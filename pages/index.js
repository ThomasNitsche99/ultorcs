import styles from '../styles/Home.module.css'
import NavBar from '../Components/Nav/NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeComponent from '../Components/home'
import FooterComponent from '../Components/footer/footer'


export default function Home() {
  return (
    
    <div className="">
      <NavBar />
      <div className={styles.container}>
        <HomeComponent />
      </div>
      <FooterComponent />
    </div>
  )
}
