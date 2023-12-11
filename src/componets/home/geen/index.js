import React from 'react'
import './geen.scss';
import image from '../../../assets/images/image 59.png';

export default function Geen() {
    return (
        <div className='geen-background'>
            <img src={image} alt="" />
            <div className="container">
                <div className="image-position">
                    <h2>Nog geen zoekprofiel aangemaakt?</h2>
                    <p>Krijg automatisch de beste woningen toegestuurd op basis van uw persoonlijke voorkeuren.</p>
                    <div className="button-white">
                        <div className="button">
                            <button>Aanmaken</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
