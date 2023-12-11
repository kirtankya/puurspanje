import React from 'react'
import './best.scss';
import image1 from '../../../assets/images/Rectangle 1408.png';
import image2 from '../../../assets/images/Rectangle 1409.png';
import image3 from '../../../assets/images/Rectangle 1410.png';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function Best() {
    return (
        <div className='best-background'>
            <div className="container">
                <Fade delay={500} left>
                    <div className="flex-direction">
                        <div className="text-4">
                            <h2>Verken het beste aanbod van woningen in Zuid-Spanje</h2>
                        </div>
                        <div className="text-5">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </Fade>
                <Slide delay={500} bottom>
                    <div className="text-6">
                        <h2>Uitgelichte woningen in Spanje</h2>
                    </div>
                    <div className="flex-box">
                        <div className="box-main">
                            <img src={image1} alt="" />
                            <div className="text-7">
                                <p>Luxe villa in Alicante</p>
                                <span>€ 550.000</span>
                            </div>
                        </div>
                        <div className="box-main">
                            <img src={image2} alt="" />
                            <div className="text-7">
                                <p>Luxe villa in Alicante</p>
                                <span>€ 550.000</span>
                            </div>
                        </div>
                        <div className="box-main">
                            <img src={image3} alt="" />
                            <div className="text-7">
                                <p>Luxe villa in Alicante</p>
                                <span>€ 550.000</span>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
