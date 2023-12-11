import React from 'react'
import './header.scss';
import logo from '../../assets/logo/Group.svg';

export default function Header() {
    return (
        <>
            <div className='header'>
                <div className="container">
                    <div className="main-flex">
                        <div className="flex">
                            <div className="icon">
                                <i class="bi bi-star-fill icon-star"></i>
                                <i class="bi bi-star-fill icon-star"></i>
                                <i class="bi bi-star-fill icon-star"></i>
                                <i class="bi bi-star-fill icon-star"></i>
                                <i class="bi bi-star-fill icon-star"></i>
                            </div>
                            <p>4.8/5</p>
                            <span>65 reviews on Facebook</span>
                        </div>
                        <div className="flex-items">
                            <div className="icon">
                                <i class="bi bi-telephone-inbound icon-tel"></i>
                                <p>+34 6 1824 5967</p>
                            </div>
                            <a>Belverzoek</a>
                            <a>Contact</a>
                            <a>Inloggen</a>
                        </div>
                    </div>
                </div>
            </div>
            <header>
                <div className="container">
                    <div className="flex-header">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="flex-main">
                            <div className="header-items">
                                <a href="">Aanbod</a>
                                <a href="">Regio</a>
                                <a href="">Aanpak</a>
                                <a href="">Meer</a>
                            </div>
                            <div className='items'>
                                <h2>Zoekprofiel</h2>
                            </div>
                            <div className="menu-icon">
                                <i class="bi bi-list icon-menu"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
