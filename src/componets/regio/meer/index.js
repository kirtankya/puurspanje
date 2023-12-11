import React from 'react'
import './meer.scss';
import image from '../../../assets/images/Rectangle 1473.png'
import img from '../../../assets/icon/Frame 427319003.png';
import image1 from '../../../assets/images/Rectangle 1474.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


export default function Meer() {
    return (
        <div className='meer-background'>
            <div className="container">
                <Fade delay={500} bottom>
                    <div className="flex-meer">
                        <h2>En nog veel meer</h2>
                        <div className="text-meer">
                            <p>Stel je een afgelegen strand van gouden zand, omgeven door heuvels bedekt met prachtige flora en fauna. Als dit is uw idee van het paradijs, dan Calblanque National Park is voor jou. Dit verborgen paradijs ligt net ten zuiden van La Manga en de Mar Menor aan de <span> Costa Calida</span>.</p>
                        </div>
                    </div>
                </Fade>
                <Fade delay={500} left>
                    <div className="flex-box">
                        <div className="box-meer">
                            <h3>Nederlandstalige makelaar</h3>
                            <p>Zelf geen ster in de Spaanse taal? Geen zorgen, we helpen u graag bij het vinden van uw droomhuis. Puurspanje is een Nederlandstalige makelaar in Spanje. Het is namelijk wel zo fijn om in uw eigen taal uit te kunnen leggen wat u precies zoekt in uw nieuwe woning.</p>
                        </div>
                        <div className="box-meer">
                            <h3>Nederlandstalige makelaar</h3>
                            <p>Zelf geen ster in de Spaanse taal? Geen zorgen, we helpen u graag bij het vinden van uw droomhuis. Puurspanje is een Nederlandstalige makelaar in Spanje. Het is namelijk wel zo fijn om in uw eigen taal uit te kunnen leggen wat u precies zoekt in uw nieuwe woning.</p>
                        </div>
                    </div>
                </Fade>
                <Fade delay={500} right>
                    <div className="flex-img">
                        <img src={image} alt="" />
                        <div className="box-img">
                            <p>Calblanque</p>
                            <span>Stel je een afgelegen strand van gouden zand, omgeven door heuvels bedekt met prachtige flora en fauna. Als dit is uw idee van het paradijs, dan Calblanque National Park is voor jou.</span>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </Fade>
                <Bounce left>
                    <div className="flex-img-containe">
                        <img src={image1} alt="" />
                        <div className="text-image1">
                            <h2>Sierra Espuña</h2>
                            <p>Bezienswaardigheden Sierra Espuña
                                Wat zijn de mooiste plekken in de Sierra Espuña in Spanje? Het is een van de beste gebieden om te klimmen in Spanje. Je kan er urenlang wandelen en fietsen over een uitgebreid netwerk aan paden.
                            </p>
                            <a href="">Less meer</a>

                        </div>
                    </div>
                </Bounce>
            </div>
        </div>
    )
}
