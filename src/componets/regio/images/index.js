import React from 'react'
import './image.scss';
import image from '../../../assets/images/image-1.png';
import icon from '../../../assets/icon/Frame 427319003.png';
import image2 from '../../../assets/images/image-2.png';
import image3 from '../../../assets/images/image-3.png';
import image4 from '../../../assets/images/image-4.png';
import image5 from '../../../assets/images/image-5.png';
import image6 from '../../../assets/images/image-6.png';
import { Zoom } from 'react-reveal';




export default function Image() {
    return (
        <div className='image-background'>
            <div className="container">
                <Zoom top>
                    <h2>Activiteiten & bezienswaardigheden</h2>
                    <div className="image-flex">
                        <div className="image">
                            <img src={image} alt="" />
                            <div className="box-image">
                                <p>Golfbanen</p>
                                <p>Binnen een straal van 50 kilometer ontstond in de afgelopen jaren een golfparadijs met ruim twintig ...</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className="image">
                            <img src={image2} alt="" />
                            <div className="box-image">
                                <p>Golfbanen</p>
                                <p>Binnen een straal van 50 kilometer ontstond in de afgelopen jaren een golfparadijs met ruim twintig ...</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className="image">
                            <img src={image3} alt="" />
                            <div className="box-image">
                                <p>Golfbanen</p>
                                <p>Binnen een straal van 50 kilometer ontstond in de afgelopen jaren een golfparadijs met ruim twintig ...</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="image-flex">
                        <div className="image">
                            <img src={image4} alt="" />
                            <div className="box-image">
                                <p>Golfbanen</p>
                                <p>Binnen een straal van 50 kilometer ontstond in de afgelopen jaren een golfparadijs met ruim twintig ...</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className="image">
                            <img src={image5} alt="" />
                            <div className="box-image">
                                <p>Golfbanen</p>
                                <p>Binnen een straal van 50 kilometer ontstond in de afgelopen jaren een golfparadijs met ruim twintig ...</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className="image">
                            <img src={image6} alt="" />
                            <div className="box-image">
                                <p>Golfbanen</p>
                                <p>Binnen een straal van 50 kilometer ontstond in de afgelopen jaren een golfparadijs met ruim twintig ...</p>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}
