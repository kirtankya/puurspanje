import React from 'react'
import './start.scss';
import image from '../../../assets/images/img-1.png';
import image1 from '../../../assets/images/img.png';
import image2 from '../../../assets/images/image 72.png'
import image3 from '../../../assets/images/Rectangle 1506.png';
import image4 from '../../../assets/images/image 74.png';

export default function Start() {
    return (
        <div className='start-main'>
            <div className="container">
                <div className="flex-start">
                    <h2>De start van een droom</h2>
                    <p>Bent u het grijze, natte weer in België en Nederland ook zo beu? Droomt u van zon, zee en strand, maar ook van de rust, ver weg van het massatoerisme? Dan is wonen in Spanje u op het lijf geschreven.</p>
                </div>
                <div className="flex-images">
                    <div className="images-main">
                        <img src={image} alt="" />
                        <img src={image1} alt="" />
                    </div>
                    <div className="image-main">
                        <img src={image2} alt="" />
                    </div>
                </div>
                <h2>Waarom deze regio?</h2>
                <div className="flex-start-text">
                    <p>Stelt u zich even voor: een prachtig landschap met meer dan 250 km ongerepte zandstranden, rustgevende natuurgebieden en authentieke Spaanse steden. Heerlijk weer in de winter en milde temperaturen in de zomer.</p>
                    <p>Denk aan een Mediterraan, subtropisch klimaat met milde zomertemperaturen (28-32°C) en zachte lentetemperaturen in de winter. Bovendien schijnt de zon er meer dan 300 dagen per jaar.</p>
                    <p>De Costa Calida en de Costa Blanca Zuid zijn kleine klimaatparadijzen. De bergen van het binnenland beschutten dit gebied tegen de wind en garanderen het hele jaar door aangename temperaturen.</p>
                </div>
                <div className="box-main-1">
                    <div className="images-main">
                        <div className="images-box">
                            <img src={image3} alt="" />
                        </div>
                        <div className="images-box">
                            <img src={image4} alt="" />
                        </div>
                    </div>
                    <div className="box-start">
                        <p>Kopen in Spanje?</p>
                        <span>Benieuwd naar wat je kunt kopen in de beste regio van Spanje?</span>
                        <span className='text-span'>Maak een zoekprofiel aan en ontvang kosteloos en vrijblijvend een persoonlijke top 5.</span>
                        <div className="button-main">
                            <div className="button">
                                <button>Zoekprofiel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
