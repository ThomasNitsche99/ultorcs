import react, {useEffect} from "react";
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardHeader, CardBody, CardGroup, CardTitle, CardImg, CardSubtitle, CardText } from 'reactstrap'
import beer from '../public/beer.png'
import horserace from '../public/horserace.png'
import card from '../public/card.png'
import Link from 'next/link'




const HomeComponent = (props) =>{


  useEffect( () =>{
    console.log(beer);
  })


      return (
        <div className={styles.home_container}>
          <Card>
                <CardHeader style={{textAlign:"center",fontSize:"50px", backgroundColor:"#ED1C24", color:"white"}}>Velkommen til ultorcs!</CardHeader>
                <CardBody>

                    <div className={styles.home_cards}>

                      <Link href="./randomizer">
                          <div className={styles.home_card}>
                            <Card>
                              <CardImg
                                  alt="Card image cap"
                                  src={beer.src}
                                  top
                                  width="100%"
                                  style={{height:"300px", width:"100%"}}
                              />
                              <CardBody  style={{backgroundColor:"#ED1C24", color:"white"}}>
                              <CardTitle tag="h5" style={{textAlign:"center", fontSize:"25px"}}>
                                Randomizer
                              </CardTitle>
                              <CardText>Klink inn navnet på gutta og se hvem den heldige blir</CardText>
                              </CardBody>
                            </Card>
                          </div>
                      </Link>

                      <Link href="./hestelop">
                          <div className={styles.home_card}>
                            <Card>
                              <CardImg
                                  alt="Card image cap"
                                  src={horserace.src}
                                  top
                                  width="100%"
                                  style={{height:"300px", width:"100%"}}
                              />
                              <CardBody  style={{backgroundColor:"#ED1C24", color:"white"}}>
                              <CardTitle tag="h5" style={{textAlign:"center", fontSize:"25px"}}>
                                Hesteløp
                              </CardTitle>
                              <CardText>Helt mexican. Sleng på hesteløp låta og føl på spenningen</CardText>
                              </CardBody>
                            </Card>
                          </div>
                      </Link>

                      <Link href="./overEllerUnder">
                        <div className={styles.home_card}>
                          <Card>
                            <CardImg
                                alt="Card image cap"
                                src={card.src}
                                top
                                width="100%"
                                style={{height:"300px", width:"100%"}}
                            />
                            <CardBody  style={{backgroundColor:"#ED1C24", color:"white"}}>
                            <CardTitle tag="h5" style={{textAlign:"center", fontSize:"25px"}}>
                              Over eller Under
                            </CardTitle>
                            <CardText>Gjett over eller under og drekk når du taper</CardText>
                            </CardBody>
                          </Card>
                        </div>
                      </Link>
                    </div>
                </CardBody>
          </Card>
        </div>
  )
}

export default HomeComponent;