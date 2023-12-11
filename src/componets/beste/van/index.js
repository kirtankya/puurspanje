import React from 'react'
import './van.scss';
import image from '../../../assets/images/image-7.png';
import image1 from '../../../assets/images/image-8.png';
import image2 from '../../../assets/images/image-9.png';


export default function Van() {
    return (
        <div className='spanje-background'>
            <div className="container">
                <div className="flex-spanje">
                    <h2>Beste regio van Spanje</h2>
                    <div className="text-spanje">
                        <p>De Costa Cálida en Costa Blanca Zuid in Spanje zijn de laatste verborgen Mediterrane schatten, amper beïnvloed door het toerisme. De stranden en de natuur hebben hun natuurlijke schoonheid behouden. En de cultuur is authentiek gebleven. Proef van het leven in het echte Spanje</p>
                        <span>100% de mooiste regio</span>
                    </div>
                </div>
                <div className="main-text">
                    <h2>Uitgelichte plaatsen</h2>

                    <div className="flex-main-1">
                        <div className="image-main">
                            <img src={image} alt="" />
                            <p>Murcia</p>
                            <span>Murcia staat bekend om de diverse bouwstijlen van veel historische waarde. U vindt er sprookjesachtige gebouwen, knusse steegjes en diverse kerken…</span>
                        </div>
                        <div className="image-main">
                            <img src={image1} alt="" />
                            <p>Murcia</p>
                            <span>Murcia staat bekend om de diverse bouwstijlen van veel historische waarde. U vindt er sprookjesachtige gebouwen, knusse steegjes en diverse kerken…</span>
                        </div>
                        <div className="image-main">
                            <img src={image2} alt="" />
                            <p>Murcia</p>
                            <span>Murcia staat bekend om de diverse bouwstijlen van veel historische waarde. U vindt er sprookjesachtige gebouwen, knusse steegjes en diverse kerken…</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
