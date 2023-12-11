import React from 'react'
import './makelar.scss';
import Jump from 'react-reveal/Jump';

export default function Makelar() {
    return (
        <div className='makelar-background'>
            <div className="container">
                <Jump>
                    <div className="flex-text">
                        <h2>Makelaar in Spanje</h2>
                        <div className="text-makelar">
                            <p>Puurspanje is dé Nederlandse makelaar in Spanje die erin slaagt om voor iedereen het juiste droomhuis te vinden. Telkens opnieuw, maar elke keer anders. We regelen alle ingewikkelde zaken, van het koopcontract en juridische zaken tot het interieur, internet en verzekeringen. En dat doen we allemaal volledig gratis! Want twee zaken staan centraal: een persoonlijke service en tevreden klanten. </p>
                            <span>Een huis kopen in Spanje was nog nooit zo eenvoudig en relaxed. Weet u al aan welke wensen uw droomhuis moet voldoen? Maak eenvoudig een zoekprofiel aan. Dan sturen we u een persoonlijke top 5.</span>
                            <div className="text-end">
                                <p>Zoekprofiel aanmaken</p>
                            </div>
                        </div>
                    </div>
                </Jump>
            </div>
        </div>
    )
}
