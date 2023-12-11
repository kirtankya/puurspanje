import React from 'react'
import './team.scss'
import Slide from 'react-reveal/Slide';

export default function Team() {
    return (
        <div className='team-background'>
            <div className="images">

            </div>
            <div className="container">
                <Slide delay={500} right>
                    <div className="team-containe">
                        <h2>Het team van Puurspanje</h2>
                        <div className="text-para">
                            <p>Een huis kopen in Spanje was nog nooit zo eenvoudig en relaxed. Weet u al aan welke wensen uw droomhuis moet voldoen? Maak eenvoudig een zoekprofiel aan. Dan sturen we u een persoonlijke top 5.</p>
                            <span>Ons team</span>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
