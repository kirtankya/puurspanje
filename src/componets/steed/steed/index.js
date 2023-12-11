import React from 'react'
import './steed.scss';
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';

export default function Steed1() {
    return (
        <div className='container'>
            <Slide delay={500} left>
                <div className="details">
                    <p>Blog</p>
                    <i class="bi bi-chevron-right icon"></i>
                    <span>Wat mij nog steeds verbaast over de Spanjaarden</span>
                </div>
            </Slide>
            <Jump>
                <div className="steeds">
                    <h2>Wat mij nog steeds verbaast over de Spanjaarden</h2>
                    <div className="flex-steed">
                        <span>15 December 2020</span>
                        <span>5 min leestijd</span>
                    </div>
                    <p>Iedereen heeft wel een mening over Spanje en de inwoners van het land. Zo denkt men vaak in het buitenland dat Spanjaarden lui zijn en alleen maar van het leven willen genieten met hun fiesta, siësta en sangria.</p>
                </div>
            </Jump>
        </div>
    )
}
