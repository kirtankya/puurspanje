import React from 'react'
import './regiio.scss';
import image from '../../../assets/images/image 75.png';
import image1 from '../../../assets/images/image 76.png';

export default function Regiio() {
    return (
        <div className='regiio-main'>
            <div className="container">
                <div className="regiio-flex">
                    <h2>Spanje’s beste regio</h2>
                    <p>Waarom wonen en investeren in de Costa Cálida en Costa Blanca Zuid zo aangenaam en lucratief kan zijn.</p>
                </div>
                <div className="flex-image">
                    <div className="image-text">
                        <img src={image} alt="" />
                        <p>Costa Blanca Zuid</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                    <div className="image-text">
                        <img src={image1} alt="" />
                        <p>Costa Cálida</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
