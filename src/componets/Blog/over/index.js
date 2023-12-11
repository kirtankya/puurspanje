import React from 'react'
import './over.scss';
import image from '../../../assets/images/Rectangle 14.png';
import img from '../../../assets/images/Rectangle 1412.png';
import image1 from '../../../assets/images/Rectangle 1459.png';
import image2 from '../../../assets/images/64.png';
import image3 from '../../../assets/images/65.png';



export default function Over() {
    return (
        <div className='over-background'>
            <div className="container">
                <div className="flex-background">
                    <div className="card-2">
                        <div className="image-card">
                            <img src={image} alt="" />
                        </div>
                        <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                        <div className="flex-text">
                            <span>15 December 2020</span>
                            <span>5 min leestijd</span>
                        </div>
                        <hr />
                    </div>
                    <div className="card-main">
                        <div className="card-3">
                            <div className="image-card">
                                <img src={img} alt="" />
                            </div>
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <div className="flex-text">
                                <span>15 December 2020</span>
                                <span>5 min leestijd</span>
                            </div>
                            <hr />
                        </div>
                        <div className="card-3">
                            <div className="image-card">
                                <img src={image1} alt="" />
                            </div>
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <div className="flex-text">
                                <span>15 December 2020</span>
                                <span>5 min leestijd</span>
                            </div>
                            <hr />
                        </div>
                        <div className="card-3">
                            <div className="image-card">
                                <img src={image2} alt="" />
                            </div>
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <div className="flex-text">
                                <span>15 December 2020</span>
                                <span>5 min leestijd</span>
                            </div>
                            <hr />
                        </div>
                        <div className="card-3">
                            <div className="image-card">
                                <img src={image3} alt="" />
                            </div>
                            <p>Wat mij nog steeds verbaast over de Spanjaarden</p>
                            <div className="flex-text">
                                <span>15 December 2020</span>
                                <span>5 min leestijd</span>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
