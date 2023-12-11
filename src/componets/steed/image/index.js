import React from 'react'
import './image.scss';
import image from '../../../assets/images/Rectangle 1460.png'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function Image() {
    return (
        <>
            <Zoom>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </Zoom>
            <Slide delay={500} bottom>
                <div className="container">
                    <div className="containe">
                        <div className="text-img">
                            <p>De Salzillo-processie is wel de belangrijkste processie met de Semana Santa van Murcia. Bij de eerste zonnestraal op goede vrijdag om zeven uur wordtvolgens de standaard van het broederschap- het gezicht van de  Dolorosa de Moeder der Smarten. </p>
                            <span>Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden de katholieken het gebied op de Moren. De moskeeën verdwenen en de kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor het zeggen. Er ontstonden historische straten die we vandaag de dag nog kennen; Trapería, Platería.</span>
                        </div>
                    </div>
                </div>
            </Slide>
        </>
    )
}
