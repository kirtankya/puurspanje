import React from 'react'
import './murcia.scss';
import image from '../../../assets/images/Rectangle 1461.png';
import image1 from '../../../assets/images/Rectangle 1462.png';
import img from '../../../assets/images/Rectangle 1459.png';
import Zoom from 'react-reveal/Zoom';

export default function Murcia() {
    return (
        <div className='murcia-background'>
            <Zoom>
                <div className="image-flex">
                    <img src={image} alt="" />
                    <img src={image1} alt="" />
                </div>
            </Zoom>
            <Zoom delay={500} bottom>
                <div className="text-murcia">
                    <h2>Wonen In Murcia</h2>
                    <p>De Salzillo-processie is wel de belangrijkste processie met de Semana Santa van Murcia. Bij de eerste zonnestraal op goede vrijdag om zeven uur wordtvolgens de standaard van het broederschap- het gezicht van de  Dolorosa de Moeder der Smarten. </p>
                    <p>Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden de katholieken het gebied op de Moren. De moskeeën verdwenen en de kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor het zeggen. Er ontstonden historische straten die we vandaag de dag nog kennen; Trapería, Platería.</p>
                    <div className="flex-text">
                        <span>Bron:</span>
                        <a>Spanje Vandaag</a>
                    </div>
                </div>
            </Zoom>
            <h2>Gerelateerde artikelen</h2>
            <div className="card-flex">
                <div className="flex-items">
                    <div className="card">
                        <div className="image">
                            <img src={img} alt="" />
                        </div>
                        <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                        <span>15 December 2020</span>
                        <hr />
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src={img} alt="" />
                        </div>
                        <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                        <span>15 December 2020</span>
                        <hr />
                    </div>
                </div>
                <div className="card-1">
                    <h2>Kopen in Spanje?</h2>
                    <p>Benieuwd naar wat je kunt kopen in de beste regio van Spanje?</p>
                    <h5>Maak een zoekprofiel aan en ontvang kosteloos en vrijblijvend een persoonlijke top 5.</h5>
                    <hr />
                    <div className="button-black">
                        <div className="button">
                            <button>Zoekprofiel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
