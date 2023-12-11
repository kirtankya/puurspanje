import React from 'react'
import './spanje.scss';
import image from '../../../assets/images/Rectangle 1388.png';
import image1 from '../../../assets/images/Rectangle 1389.png';
import image2 from '../../../assets/images/Rectangle 1390.png';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Spanje() {
    return (
        <div className='spanje-background'>
            <div className="container">
                <Bounce delay={200} left>
                    <div className="flex-containe">
                        <div className="text-1">
                            <h2>Beste regio Spanje</h2>
                        </div>
                        <div className="text-2">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </Bounce>
                <div className="flex-main">
                    <Fade delay={500} bottom>
                        <div className="main-menu-1">
                            <h2>Huis kopen aan de Costa Cálida</h2>
                            <div className="box-flex">
                                <div className="box">
                                    <div className="flex-m">
                                        <img src={image} alt="" />
                                        <div className="text-3">
                                            <span>Murcia</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="flex-m">
                                        <img src={image1} alt="" />
                                        <div className="text-3">
                                            <span>Murcia</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="flex-m">
                                        <img src={image2} alt="" />
                                        <div className="text-3">
                                            <span>Murcia</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-menu-1">
                            <h2>Huis kopen aan de Costa Blanca</h2>
                            <div className="box-flex">
                                <div className="box">
                                    <div className="flex-m">
                                        <img src={image} alt="" />
                                        <div className="text-3">
                                            <span>Murcia</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="flex-m">
                                        <img src={image1} alt="" />
                                        <div className="text-3">
                                            <span>Murcia</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="flex-m">
                                        <img src={image2} alt="" />
                                        <div className="text-3">
                                            <span>Murcia</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <hr />
            </div>
        </div>
    )
}
