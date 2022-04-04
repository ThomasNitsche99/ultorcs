import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'

const NavBar = () =>{

    return(
        <div className="">
            <Nav className={styles.nav_bar} justified >
                <NavItem className={styles.nav_header}>
                    <Link href="/">
                        <NavLink style={{color:"white"}} className={styles.nav_link}><h1>Ultorcs.no</h1></NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/hestelop/">
                        <NavLink className={styles.nav_link}><h1 style={{color:"white"}}>Hesteløp</h1></NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link href="/randomizer/">
                        <NavLink className={styles.nav_link}><h1 style={{color:"white"}}>Randomizer</h1></NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                <Link href="/overEllerUnder/">
                        <NavLink className={styles.nav_link}><h1 style={{color:"white"}}>Over/under</h1></NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <NavLink className={styles.nav_link}><h1 style={{color:"white"}}>drikkelek#3</h1></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={styles.nav_link}><h1 style={{color:"white"}}>drikkelek#4</h1></NavLink>
                </NavItem>   
            </Nav>
        </div>
    )
}

export default NavBar;