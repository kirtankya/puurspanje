import React from 'react'
import './regio.scss';
import Fade from 'react-reveal/Fade';

export default function Regio1() {
    return (
        <div className='regio-background'>
            <div className="container">
                <Fade delay={500} top>
                    <div className="flex-regio">
                        <h2>Activiteiten in de regio</h2>
                        <div className="text-regio">
                            <p>Niet alleen het klimaat maar ook bezienswaardigheden zoals natuurparken en activiteiten als golf, strand en shoppen zijn natuurlijk aanwezig.</p>
                            <span>Lees meer over wat er zoal te zien en beleven valt in de Costa Calida & Costa Blanca Zuid.</span>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
