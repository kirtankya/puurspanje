import React from 'react'
import './consta.scss';
import LightSpeed from 'react-reveal/LightSpeed';

export default function Consta() {
    return (
        <div className='consta-background'>
            <div className="container">
                <LightSpeed delay={500} left >
                    <div className="text-consta">
                        <h2>De Costa Calida en Costa Blanca Zuid. Voor rust, natuur en zon.</h2>
                    </div>
                    <div className="flex-box">
                        <div className="text-box">
                            <p>Uitgelichte woningen</p>
                            <span>Puurspanje is een award-winning makelaar in de Costa Calida en Costa Blanca Zuid.</span>
                        </div>
                        <div className="text-box">
                            <p>Uitgelichte woningen</p>
                            <span>Puurspanje is een award-winning makelaar in de Costa Calida en Costa Blanca Zuid.</span>
                        </div>
                        <div className="text-box">
                            <p>Uitgelichte woningen</p>
                            <span>Puurspanje is een award-winning makelaar in de Costa Calida en Costa Blanca Zuid.</span>
                        </div>
                    </div>
                    <p>Puurspanje is een award-winning makelaar in de Costa Calida en Costa Blanca Zuid.</p>
                </LightSpeed>
            </div>
        </div>
    )
}
