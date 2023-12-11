import React from 'react'
import './puurspanje.scss';
import icon1 from '../../../assets/icon/comment 1.png';
import Fade from 'react-reveal/Fade';

export default function Puurspanje() {
    return (
        <>
            <div className="container-fluid">
                <Fade delay={500} top>
                    <div className='daarom_icon container'>
                        <div className="daarom_icon_div">
                            <p>Zoek op kaart</p>
                            <i class="bi bi-binoculars"></i>
                        </div>
                        <div className="daarom_icon_div">
                            <p>Verken de regio</p>
                            <i class="bi bi-flag"></i>
                        </div>
                        <div className="daarom_icon_div">
                            <p>Zoekprofile aanmaken</p>
                            <i class="bi bi-person-badge"></i>
                        </div>
                    </div>
                </Fade>

                <div className='daarom_cont'>
                    <div className="container">
                        <Fade delay={500} bottom>
                            <div className='daarom_header'>
                                <h2>Daarom puurspanje</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio iusto voluptatem blanditiis magni, enim in sapiente nihil accusantium.</p>
                            </div>
                            <div className='daarom_cards'>
                                <div className='daarom_card'>
                                    <img src={icon1} alt="" />
                                    <p>Al meer dan 15 jaar specialist in vastgod.</p>
                                </div>
                                <div className='daarom_card'>
                                    <img src={icon1} alt="" />
                                    <p>Toezict Al meer dan 15 jaar specialist in inspecties.</p>
                                </div>
                                <div className='daarom_card'>
                                    <img src={icon1} alt="" />
                                    <p>Nederlandstalige Toezict Al meer dan 15 jaar specialist in  Spanje.</p>
                                </div>
                                <div className='daarom_card'>
                                    <img src={icon1} alt="" />
                                    <p>Heldere Nederlandstalige Toezict bouwbedrijen.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </>
    )
}
