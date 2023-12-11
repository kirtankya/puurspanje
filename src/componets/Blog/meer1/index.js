import React from 'react'
import './meer1.scss';
import image from '../../../assets/images/Rectangle 149.png';
import image1 from '../../../assets/images/Rectangle 140.png';
import image2 from '../../../assets/images/Rectangle 146.png';
import image3 from '../../../assets/images/Rectangle 141.png';


export default function Meer1() {
    return (
        <div className='meer1-background'>
            <div className="container">
                <h2>Meer artikelen</h2>
                <div className="flex-items-k">
                    <div className="main-box">
                        <div className="box">
                            <div className="flex-box">
                                <img src={image} alt="" />
                                <div className="text-containe">
                                    <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                                    <span>Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa
                                        qui officia deserunt
                                    </span>
                                    <div className="text-date">
                                        <span>15 December 2020</span>
                                        <span>5 min leestijd</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="box">
                            <div className="flex-box">
                                <img src={image1} alt="" />
                                <div className="text-containe">
                                    <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                                    <span>Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa
                                        qui officia deserunt
                                    </span>
                                    <div className="text-date">
                                        <span>15 December 2020</span>
                                        <span>5 min leestijd</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="box">
                            <div className="flex-box">
                                <img src={image2} alt="" />
                                <div className="text-containe">
                                    <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                                    <span>Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa
                                        qui officia deserunt
                                    </span>
                                    <div className="text-date">
                                        <span>15 December 2020</span>
                                        <span>5 min leestijd</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="box">
                            <div className="flex-box">
                                <img src={image3} alt="" />
                                <div className="text-containe">
                                    <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                                    <span>Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa
                                        qui officia deserunt
                                    </span>
                                    <div className="text-date">
                                        <span>15 December 2020</span>
                                        <span>5 min leestijd</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="box-shadow">
                        <p className='text-box'>Zoekprofiel</p>
                        <span className='text-box-1'>Benieuwd naar wat u kunt kopen in de beste en mooiste regio van Spanje?</span>
                        <h4 className='text-box-2'>Vul uw zoekprofiel in!</h4>
                        <hr />
                        <div className="button-black">
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
