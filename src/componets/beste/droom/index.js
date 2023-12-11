import React from 'react'
import './droom.scss';
import Fade from 'react-reveal/Fade';

export default function Droom() {
    return (
        <div className='droom-main'>
            <div className="container">
                <div className="flex-droom">
                    <div className="droom-text">
                        <h2>De start van een droom in de beste regio van Spanje</h2>
                        <p>Idyllisch, een heerlijk klimaat & rust</p>
                    </div>
                    <div className="droom-text-1">
                        <p>Geniet van het rustige ritme van de plaatselijke bevolking, met de zon als beste vriend.</p>
                        <span>De kuststrook langs Costa Blanca Zuid en de Costa Calida Noord is zo’n authentieke plek, met schitterende zandstranden en talloze palmbomen.</span>
                    </div>
                </div>
                <div className="flex-text-1">
                    <div className="droom-text-2">
                        <h2>Beste klimaat van Spanje</h2>
                        <p>De Costa Calida en de Costa Blanca Zuid zijn kleine klimaatparadijzen. De bergen van het binnenland beschutten dit gebied tegen de wind en garanderen het hele jaar door aangename temperaturen.</p>
                        <p>Denk aan een Mediterraan, subtropisch klimaat met milde zomertemperaturen (28-32°C) en zachte lentetemperaturen in de winter. Bovendien schijnt de zon er meer dan 300 dagen per jaar.</p>
                    </div>
                    <div className="droom-text-2">
                        <h2>Rustig & betaalbaar</h2>
                        <p>De lokale, Spaanse bevolking wordt er nog niet overspoeld door massatoerisme. En zelfs in het hoogseizoen vind u er vlot een rustig plekje op het strand, op een terras of in een restaurant.</p>
                        <p>Bovendien leeft u er vele malen goedkoper dan in België, Nederland of het toeristische Spanje.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
