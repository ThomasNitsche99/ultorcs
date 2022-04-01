import styles from '../styles/Home.module.css'
import NavBar from '../Components/Nav/NavComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    
    <div className="">
      <NavBar />
      <div className={styles.container}>
        <h1>Welcome to ultorcs</h1>
      </div>
    </div>
  )
}
