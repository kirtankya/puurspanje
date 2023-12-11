import React from 'react'
import './wonen.scss';
import image from '../../../assets/images/image 78.png';
import image1 from '../../../assets/images/image 79.png';
import image2 from '../../../assets/images/image 80.png';
import Slide from 'react-reveal/Slide';


export default function Wonen() {
    return (
        <div className='wonen-background'>
            <div className="container">
                <div className="image-wonen">
                    <Slide right>
                        <img src={image} alt="" />
                    </Slide>
                    <Slide bottom>
                        <div className="image-flex">
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                        </div>
                    </Slide>
                </div>
                <Slide delay={500} top>
                    <div className="text-wonen">
                        <h2>Wonen In Murcia</h2>
                        <p>De Salzillo-processie is wel de belangrijkste processie met de Semana Santa van Murcia. Bij de eerste zonnestraal op goede vrijdag om zeven uur wordtvolgens de standaard van het broederschap- het gezicht van de  Dolorosa de Moeder der Smarten. </p>
                        <p>Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden de katholieken het gebied op de Moren. De moskeeën verdwenen en de kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor het zeggen. Er ontstonden historische straten die we vandaag de dag nog kennen; Trapería, Platería.</p>
                        <span>Er ontstonden historische straten:</span>
                        <ul>
                            <li>Tot in de middeleeuwen waren de Moren de baas</li>
                            <li>Hierna veroverden de katholieken het gebied op de Moren</li>
                            <li>De moskeeën verdwenen en de kerken kwamen op</li>
                            <li>In het jaar 1266 kregen de gildes het hier voor het zeggen</li>
                        </ul>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
